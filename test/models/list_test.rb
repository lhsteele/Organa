# == Schema Information
#
# Table name: lists
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
