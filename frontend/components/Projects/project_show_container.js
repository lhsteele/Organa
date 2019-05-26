import { connect } from 'react-redux';
import { requestProject, deleteProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  // project: state.projects[ownProps.project.id]
  project: state.projects[ownProps.match.params.projectId] || {}
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestProject: project => dispatch(requestProject(project)),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)

