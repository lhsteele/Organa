# json.extract! @project, :name, :description, :owner_id, :archived

# json.id do
json.id @project.id
json.name @project.name
json.description @project.description
json.owner_id @project.owner_id
json.archived @project.archived
# .ids will return an array, .id will only return one
# json.teamIds @project.teams.ids
# end
