import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { createTask, requestTasks } from '../../actions/task_actions';
import { requestProjects } from '../../actions/project_actions';
import { requestLists } from '../../actions/list_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  first_name: state.session.first_name,
  last_name: state.session.last_name,
  modalType: 'profile',
  projects: Object.values(state.entities.projects),
  listId: Object.keys(state.entities.lists)[0], 
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal()),
  requestProjects: () => dispatch(requestProjects()), 
  createTask: task => dispatch(createTask(task)),
  requestProjects: () => dispatch(requestProjects()),
  requestLists: project => dispatch(requestLists(project)),
  requestTasks: listId => dispatch(requestTasks(listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)