# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
List.destroy_all
Task.destroy_all

users = User.create([
  { first_name: "Luke", last_name: "Skywalker", email: "luke@yavin.com", password: "password" },
  { first_name: "Han", last_name: "Solo", email: "han@yavin.com", password: "password" },
  { first_name: "Gial", last_name: "Ackbar", email: "gial@yavin.com", password: "password" },
])

projects = Project.create([
  { name: "Red Squadron X-wing repairs", owner_id: 6, description: "Red Two and Red Five ships are badly damaged." },
  { name: "Preparations for Echo Base", owner_id: 6, description: "Source provisions to accommodate Hoth's inhospitable climate." },
  { name: "Yellow Moon", owner_id: 6, description: "Preparing for mission on Endor" },
])

list = List.create([
  { project_id: 1 },
  { project_id: 2 },
  { project_id: 3 },
])

tasks = Task.create([
  { task_name: "Wedge to approve fixes to Red Two.", complete: false, list_id: 1 },
  { task_name: "Testing fixes to Red Five.", complete: false, list_id: 1 },
  { task_name: "Engineers to adapt airspeeders to subzero temps.", complete: false, list_id: 2 },
  { task_name: "Build pens for Tauntauns", complete: false, list_id: 2 },
  { task_name: "Place hypertransceivers in the Corva sector.", complete: false, list_id: 3 },
  { task_name: "Send message for rendez-vous over Sullust.", complete: false, list_id: 3 },
])
