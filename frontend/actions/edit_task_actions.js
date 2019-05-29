export const OPEN_TASK_FORM = "OPEN_TASK_FORM";
export const CLOSE_ELEMENT = "CLOSE_ELEMENT";
export const OPEN_DESCRIPTION = "OPEN_DESCRIPTION";

export const openTaskForm = taskId => {
  return {
    type: OPEN_TASK_FORM,
    taskId
  }
}

export const closeElement = () => {
  return {
    type: CLOSE_ELEMENT
  }
}

export const openDescription = taskId => {
  return {
    type: OPEN_DESCRIPTION,
    taskId
  }
}

