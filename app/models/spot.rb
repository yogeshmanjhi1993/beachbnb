# == Schema Information
#
# Table name: spots
#
#  id                 :integer          not null, primary key
#  host_id            :integer          not null
#  lat                :float            not null
#  lng                :float            not null
#  description        :string           not null
#  beds               :integer          not null
#  roomtype           :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  name               :string           not null
#  price              :integer          not null
#  guests             :integer          not null
#  address            :string           not null
#  kind               :string           not null
#  country            :string           not null
#  city               :string           not null
#

class Spot < ApplicationRecord
  validates :host,
            :lat,
            :lng,
            :description,
            :beds,
            :roomtype,
            :name,
            :price,
            :guests,
            :address,
            :kind,
            :country,
            :city,
            presence: true

  validates :roomtype, inclusion: { in: %w(shared private whole) }
  validates :kind, inclusion: { in: ["apartment", "beach house", "beach bungalow"]}

  has_attached_file :image, default_url: "modern2.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id,
    primary_key: :id

  has_many :bookings,
    class_name: "Booking",
    foreign_key: :spot_id,
    primary_key: :id,
    dependent: :destroy

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end


end
