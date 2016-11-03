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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
