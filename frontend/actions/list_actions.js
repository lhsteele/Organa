import * as ListsApiUtil from '../util/lists_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const requestLists = project => dispatch => {
  return ListsApiUtil.fetchLists(project).then(lists => {
    dispatch({
      type: RECEIVE_LISTS, 
      lists
    })
  return lists  
  })
}


export const requestList = listId => dispatch => {
  return ListsApiUtil.fetchList(listId).then(list => dispatch({
    type: RECEIVE_LIST,
    list
  }))
}

export const createList = list => dispatch => {
  return ListsApiUtil.createList(list).then(list => dispatch({
    type: RECEIVE_LIST,
    list
  }))
}

export const updateList = list => dispatch => {
  return ListsApiUtil.updateList(list).then(list => dispatch({
    type: RECEIVE_LIST,
    list
  }))
}

export const deleteProject = listId => dispatch => {
  return ListsApiUtil.deleteList(listId).then(list => dispatch({
    type: REMOVE_LIST,
    listId
  }))
}