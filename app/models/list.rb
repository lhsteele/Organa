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

# index on:
# project_id
class List < ApplicationRecord
  belongs_to :project
  has_many :tasks
end
