class CreateJoinTableProjectTeam < ActiveRecord::Migration[5.2]
  def change
    create_join_table :projects, :teams do |t|
      t.index [:project_id, :team_id]
    end
  end
end
