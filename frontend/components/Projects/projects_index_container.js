import { connect } from 'react-redux';
import { requestProjects, deleteProject } from '../../actions/project_actions';
import Projects from './projects_index';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
  projects: Object.values(state.projects),
  modalType: 'update',
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects)