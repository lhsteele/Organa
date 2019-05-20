# == Schema Information
#
# Table name: tasks
#
#  id           :bigint           not null, primary key
#  task_name    :string           not null
#  section_name :string
#  task_body    :string
#  complete     :boolean          not null
#  list_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
