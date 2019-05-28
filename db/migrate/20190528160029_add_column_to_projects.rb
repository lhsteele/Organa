class AddColumnToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column(:projects, :list_style, :boolean, :default => true)
  end
end
