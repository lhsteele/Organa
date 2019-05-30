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
#  archived    :boolean          default(FALSE)
#

# index on:
# owner_id
class Project < ApplicationRecord
  validates :name, presence: true
  validates :owner_id, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"
  has_many :lists
  # belongs_to :team
end
