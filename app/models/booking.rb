# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  spot_id    :integer          not null
#  guest_id   :integer          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :spot, :guest, :start_date, :end_date, presence: true

  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id,
    primary_key: :id

  belongs_to :guest,
    class_name: "User",
    foreign_key: :guest_id,
    primary_key: :id

  def overlaps?(other_booking)
    (self.start_date <= other_booking.end_date) &&
    (self.end_date >= other_booking.start_date)
  end
end
