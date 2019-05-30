import React from 'react';
import { withRouter, Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
    // isValidEmail = document.getElementById('email-input').checkValidity();
  }

  handleDemo(e) {
    e.preventDefault()
    this.props.loginDemo().then(this.props.closeModal)
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
    let names
    let button
    let h6
    if (this.props.formType == 'login') {
      h3 = <h3>Log in</h3>
      h4 = "" 
      button = "Log in"
      names = ""
      h6 = <p className="dha-signup-button" onClick={() => this.props.openModal('signup')}>
        Don't have an account? 
        <span className="sign-up">  Sign Up</span>
      </p>
    } else {
      h3 = <h3>Start your free trial</h3>
      h4 = <h4>Please use your work email address so we can connect you with your team at the Rebel base.</h4>
      names = <div className="first-last-name-labels">
        <label className="user-auth-label">
          First Name
                <br />
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.updateForm("first_name")}
            className="login-input-name" />
        </label>
        <label className="user-auth-label">
          Last Name
                <br />
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.updateForm("last_name")}
            className="login-input-name" />
        </label>
      </div>
        
      button = "Try for free"
      h6 = <h6>By signing up, I agree to the Organa Privacy Policy and Terms of Service</h6>   
    }
    return (
      <div className="user-auth-form">
        <form onSubmit={this.handleSubmit} className="user-auth-box">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {h3} 
          <br/>
          {h4}
          <div className="login-form">
            {names}
            <label className="user-auth-label">
              Email Address 
              <br />
              <input 
                type="email"
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
                className="login-input"
                required minLength="6"/>
            </label>
              <input 
                className="user-auth-form-submit" 
                type="submit"
                value={button}/>
            <div className="error-message">
              {this.renderErrors()}
            </div>
            <br/>
            {h6}
          </div>
          <div className="leia-demo" onClick={this.handleDemo}>
            <img className="leia-profile-pic" src={window.leiaURL} />
            <p className="leia-button">Demo as Leia</p>
          </div>          
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm)
