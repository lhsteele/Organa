import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
  project: { name: "", owner_id: null, description: "", archived: false },
  formType: "create"
})

const mapDispatchToProps = dispatch => ({
  submitEvent: project => dispatch(createProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)