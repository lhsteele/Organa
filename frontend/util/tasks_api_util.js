export const fetchTasks = list => (
  $.ajax({
    method: "GET", 
    url: `api/lists/${task.list_id}/tasks`
  })
)

export const fetchTask = taskId => (
  $.ajax({
    method: "GET",
    url: `api/tasks/${taskId}`
  })
)

export const createTask = task => (
  $.ajax({
    method: "POST",
    url: `api/lists/${task.list_id}/tasks`, 
    data: { task }
  })
)

export const updateTask = task => (
  $.ajax({
    method: "PATCH",
    url: `api/tasks/${task.id}`,
    data: { task }
  })
)

export const deleteTask = taskId => (
  $.ajax({
    method: "DELETE", 
    url: `api/tasks/${taskId}`
  })
)