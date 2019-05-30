class AddDefaultValueToProjectArchived < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :archived, :boolean, default: false
  end
end
