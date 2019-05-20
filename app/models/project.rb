# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

# index on:
# owner_id
class Project < ApplicationRecord
  belongs_to :owner
  has_many :lists
  belongs_to :team
end
