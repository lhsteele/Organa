import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { requestProjects } from '../../actions/project_actions';
import { requestLists } from '../../actions/list_actions';
import { requestTasks } from '../../actions/task_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  first_name: state.session.first_name,
  last_name: state.session.last_name,
  modalType: 'profile',
  projects: state.entities.projects,
  currentUserId: state.session.id, 
  listId: Object.keys(state.entities.lists)[0]
});

const mapDispatchToProps = dispatch => ({
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal()),
  requestProjects: () => dispatch(requestProjects()),
  requestLists: project => dispatch(requestLists(project)),
  requestTasks: listId => dispatch(requestTasks(listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)