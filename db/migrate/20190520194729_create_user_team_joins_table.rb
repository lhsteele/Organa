class CreateUserTeamJoinsTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :user, :team do |t|
      t.index [:user_id, :team_id]
    end
  end
end
