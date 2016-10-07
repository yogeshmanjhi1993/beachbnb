# == Schema Information
#
# Table name: spots
#
#  id                 :integer          not null, primary key
#  host_id            :integer          not null
#  lat                :float            not null
#  lng                :float            not null
#  description        :string           not null
#  bedrooms           :integer          not null
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
#

class Spot < ApplicationRecord
  validates :host, :lat, :lng, :description, :bedrooms, :beds, :roomtype, :name, :price, :guests,
    presence: true

  validates :roomtype, inclusion: { in: %w(shared private whole) }

  has_attached_file :image, default_url: "modern2.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id,
    primary_key: :id


  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end


end
