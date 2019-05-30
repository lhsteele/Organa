class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_name, null: false
      t.string :section_name
      t.string :task_body
      t.boolean :complete, null: false
      t.integer :list_id, null: false
      t.timestamps
    end
    add_foreign_key :tasks, :lists, column: :list_id, primary_key: :id
  end
end
