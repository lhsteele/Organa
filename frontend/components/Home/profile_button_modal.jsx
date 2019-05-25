import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProfileButtonModal extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser
    this.showModal = false;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logoutUser().then(this.props.closeModal)
  }

  render() {
    return (
      <div className="profile-modal">
        <ul className="profile-dropdown">
          <li>
            <ul className="current-project-subsection">
              {/* retrieve current team name and put below */}
              <li className="current-project-label">Team Name</li>
            </ul>
          </li>
          <li>
            <ul className="profile-and-logout">
              {/* link to profile page here */}
              <li>
                <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

}

export default ProfileButtonModal;