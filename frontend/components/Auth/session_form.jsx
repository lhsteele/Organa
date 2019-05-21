import React from 'react';
// import { format } from 'util';
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "", 
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let h3
    let h4
    let button
    let h6
    if (this.props.formType == 'login') {
      h3 = "Log in"
      h4 = "" 
      button = "Log in"
      h6 = ""
    } else {
      h3 = "Start your free trial"
      h4 = "Please use your work email address so we can connect you with your team in Asana."
      button = "Try for free"
      h6 = "By signing up, I agree to the Asana Privacy Policy and Terms of Service"
    }
    return (
      <div className="user-auth-form">
        <form onSubmit={this.handleSubmit} className="user-auth-box">
          {h3}
          <br/>
          {h4}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <label>
              Email Address 
              <input 
                type="text"
                value={this.state.email}
                onChange={this.updateForm("email")}
                className="login-input"/>
            </label>
            <label>
              Password 
              <input 
                type="password"
                value={this.state.password}
                onChange={this.updateForm("password")}
                className="login-input"/>
            </label>
            <input 
              className="user-auth-form-submit" 
              type="submit"
              value={button}/>
            <br/>
            {h6}
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm)