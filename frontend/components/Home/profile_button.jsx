import React from 'react';
import { withRouter, Link } from 'react-router-dom';


// props has currentUser and logout
class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser
    this.showModal = false;
  }

  handleClick(e) {
    
  }

  render() {
    debugger
    // const { first_name, last_name } = this.props.currentUser
    // const firstInitial = first_name[0]
    // const lastInitial = last_name[0]
    // let modal;
    // if (showModal === true) {
    //   modal = <
    // }
    return (
      <div className="profile-dropdown">
        <button 
          className="profile-dropdown-button">
          {/* onClick={logoutUser}> */}
          LO
        </button>
        <div className="profile-hover-dropdown-content">
          <label>
            Leia Organa 
          </label>
        </div>
        <div className="profile-click-dropdown-content">
        </div>
      </div>
    )
  }

}

export default ProfileButton;