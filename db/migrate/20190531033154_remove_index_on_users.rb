class RemoveIndexOnUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :first_name
  end
end