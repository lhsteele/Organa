import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProjects, deleteProject, updateProject, requestProject } from '../../actions/project_actions';
import Projects from './projects_index';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  projects: state.entities.projects,
  modalType: 'update',
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal()),
  updateProject: project => dispatch(updateProject(project)), 
  requestProject: project => dispatch(requestProject())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects))