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
#  address            :string           not null
#  kind               :string           not null
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
