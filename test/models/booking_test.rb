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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
