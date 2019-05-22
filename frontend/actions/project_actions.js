import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ARCHIVED = 'RECEIVE_PROJECT_ARCHIVED'

export const requestProjects = () => dispatch => {
  return ProjectsApiUtil.fetchProjects().then(projects => dispatch({
    type: RECEIVE_PROJECTS,
    projects
  }))
}

export const requestProject = project => dispatch => {
  return ProjectsApiUtil.fetchProject(project).then(project => dispatch({
    type: RECEIVE_PROJECT,
    project
  }))
}

export const createProject = project => dispatch => {
  return ProjectsApiUtil.createProject(project).then(project => dispatch({
    type: RECEIVE_PROJECT,
    project 
  }))
}

export const updateProject = project => dispatch => {
  return ProjectsApiUtil.updateProject(project).then(project => dispatch({
    type: RECEIVE_PROJECT,
    project
  }))
}

export const deleteProject = projectId => dispatch => {
  return ProjectsApiUtil.deleteProject(projectId).then(project => dispatch({
    type: REMOVE_PROJECT,
    projectId
  }))
}

export const archiveProject = projectId => dispatch => {
  return ProjectsApiUtil.archiveProject(projectId).then(project => dispatch({
    type: RECEIVE_PROJECT_ARCHIVED,
    projectId
  }))
}
