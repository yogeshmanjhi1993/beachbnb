# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  password_digest    :string
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  email              :string           not null
#  fname              :string           not null
#  lname              :string           not null
#  uid                :string
#  provider           :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :email, :fname, :lname, :session_token, :image, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  attr_reader :password

  has_many :spots,
    class_name: "Spot",
    foreign_key: :host_id,
    primary_key: :id,
    dependent: :destroy

  has_many :bookings,
    class_name: "Booking",
    foreign_key: :guest_id,
    primary_key: :id,
    dependent: :destroy

  has_many :reviews


  after_initialize :ensure_session_token

  def self.find_by_credentials(email, pw)
    user = User.find_by_email(email)
    user && user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.fname = auth.info.first_name
      user.lname = auth.info.last_name
      user.email = auth.info.email
      user.image = auth.info.image
      user.save!
    end
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
