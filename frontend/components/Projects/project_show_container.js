import { connect } from 'react-redux';
import { requestProject, deleteProject, updateProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  // project: state.projects[ownProps.project.id]
  project: state.projects[ownProps.match.params.projectId] || {},
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestProject: project => dispatch(requestProject(project)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)

