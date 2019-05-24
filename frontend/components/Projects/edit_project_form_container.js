import React from 'react';
import { connect } from 'react-redux';
import { requestProject, updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';
import { stat } from 'fs';

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.projectId != this.props.match.params.projectId) {
      this.props.requestProject(this.props.match.params.projectId)
    }
  }

  render() {
    return (
      <ProjectForm 
        project={project}
        formType={formType}
        updateProject={updateProject}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.match.params.projectId], 
  formType: "edit"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitEvent: project => dispatch(updateProject(project)),
  requestProject: project => dispatch(requestProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm)
