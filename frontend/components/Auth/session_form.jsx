import React from 'react';
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
    this.props.formAction(user).then(this.props.closeModal)
      .then(() => this.props.history.push('/home'));
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
      h3 = <h3>Log in</h3>
      h4 = "" 
      button = "Log in"
      h6 = ""
    } else {
      h3 = <h3>Start your free trial</h3>
      h4 = <h4>Please use your work email address so we can connect you with your team in Asana.</h4>
      button = "Try for free"
      h6 = <h6>By signing up, I agree to the Asana Privacy Policy and Terms of Service</h6>
        
    }
    return (
      <div className="user-auth-form">
        <form onSubmit={this.handleSubmit} className="user-auth-box">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {h3} 
          <br/>
          {h4}
          {this.renderErrors()}
          <div className="login-form">
            <label className="user-auth-label">
              Username
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.updateForm("username")}
                className="login-input" />
            </label>
            <label className="user-auth-label">
              Email Address 
              <br />
              <input 
                type="text"
                value={this.state.email}
                onChange={this.updateForm("email")}
                className="login-input"/>
            </label>
            <label className="user-auth-label">
              Password 
              <br />
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