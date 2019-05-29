import React from 'react';
import { openTaskForm, closeElement, openDescription } from '../../actions/edit_task_actions';
import { connect } from 'react-redux';
import EditTaskFormContainer from '../Tasks/edit_task_form_container';
import ProjectDescriptionContainer from '../Projects/project_description_container';

function TaskModal({ editTaskUI, showDesc, closeElement, project }) {
  let component = <ProjectDescriptionContainer project={project}/>
  if (editTaskUI) {
    component = <EditTaskFormContainer />
  } 

  return (
    <div className="edit-task-views-background" onClick={closeElement}>
      <div className="edit-task-views-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    editTaskUI: state.ui.editTaskUI,
    showDesc: state.ui.showDesc
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeElement: () => dispatch(closeElement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal)