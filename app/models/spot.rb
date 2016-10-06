# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  host_id     :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  description :string           not null
#  bedrooms    :integer          not null
#  beds        :integer          not null
#  roomtype    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
end
