class ChangeColumnListName < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:lists, :name, true)
  end
end
