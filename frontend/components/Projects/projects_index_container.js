import { connect } from 'react-redux';
import { requestProject, deleteProject } from '../../actions/project_actions';
import Projects from './projects_index';

const mapStateToProps = state => ({
  projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects)