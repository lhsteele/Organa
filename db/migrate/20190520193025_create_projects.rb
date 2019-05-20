class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :projects, :owner_id
  end
end
