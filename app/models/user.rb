# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#

class User < ApplicationRecord
  validates :email, :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
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

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, pw)
    user = User.find_by_email(email)
    user && user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
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
