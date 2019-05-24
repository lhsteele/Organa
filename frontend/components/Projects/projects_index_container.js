import { connect } from 'react-redux';
import { requestProject, deleteProject } from '../../actions/project_actions';
import Projects from './projects_index';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
  projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects)