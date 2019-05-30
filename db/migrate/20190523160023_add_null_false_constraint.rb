class AddNullFalseConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :last_name, false, 1
  end
end
