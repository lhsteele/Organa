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

# foreign_key on:
# list_id
class Task < ApplicationRecord
  belongs_to :list
end
