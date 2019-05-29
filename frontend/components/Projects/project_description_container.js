import { connect } from 'react-redux';
import { requestProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId] || {},
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestProject: project => dispatch(requestProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)

