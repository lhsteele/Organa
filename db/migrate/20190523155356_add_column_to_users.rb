class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column(:users, :last_name, :string)
    change_column_null(:users, :last_name, null: false)
  end
end
