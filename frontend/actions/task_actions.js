import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const requestTasks = listId => dispatch => {
  return TasksApiUtil.fetchTasks(listId).then(tasks => {dispatch({
    type: RECEIVE_TASKS, 
    tasks
  })})
}

export const requestTask = taskId => dispatch => {
  return TasksApiUtil.fetchTask(taskId).then(task => dispatch({
    type: RECEIVE_TASK, 
    task
  }))
}

export const createTask = task => dispatch => {
  return TasksApiUtil.createTask(task).then(task => dispatch({
    type: RECEIVE_TASK,
    task
  }))
}

export const updateTask = task => dispatch => {
  return TasksApiUtil.updateTask(task).then(task => dispatch({
    type: RECEIVE_TASK,
    task
  }))
}

export const deleteTask = taskId => dispatch => {
  return TasksApiUtil.deleteTask(taskId).then(task => dispatch({
    type: REMOVE_TASK,
    task
  }))
}