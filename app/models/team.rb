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

class Team < ApplicationRecord
  validates :team_name, presence: true
  validates :description, presence: true

  has_many :members
  has_many :projects
end
