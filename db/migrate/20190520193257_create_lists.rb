class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :name, null: false
      t.string :description
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :lists, :project_id
  end
end
