class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :first_name
  end
end
