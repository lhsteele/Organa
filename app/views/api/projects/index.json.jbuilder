@projects.each do |project|
  json.set! project.id do
    json.partial! "project", project: project
    # this needs to use the association to fetch teamIds
    # so would I need to put the association name inside the brackets?
    # json.teamIds []
  end
end
