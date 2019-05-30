import { connect } from 'react-redux';
import { requestProject, deleteProject, updateProject, archiveProject } from '../../actions/project_actions';
import { requestList } from '../../actions/list_actions';
import { closeElement } from '../../actions/edit_task_actions'
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  // project: state.projects[ownProps.project.id]
  project: state.entities.projects[ownProps.match.params.projectId] || {},
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestProject: project => dispatch(requestProject(project)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project)),
  archiveProject: projectId => dispatch(archiveProject(projectId)),
  closeElement: () => dispatch(closeElement())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)

