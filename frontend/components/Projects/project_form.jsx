import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEvent(this.state)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  // Edit only allows changing name and description
  // Create has fields for name and button to add a description which
  // makes the text field appear
  render() {
    return (

    )
  }
}