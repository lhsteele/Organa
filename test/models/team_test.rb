# == Schema Information
#
# Table name: teams
#
#  id          :bigint           not null, primary key
#  team_name   :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
