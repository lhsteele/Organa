import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewButtonModal: false
    }
  }

  render() {
    const firstInitial = this.props.first_name[0]
    const lastInitial = this.props.last_name[0]

    let modal;
    if (this.state.showNewButtonModal === true) {
      modal = (
        <>
          <div
            className="transparent-modal"
            onClick={() => this.setState({ showModal: false })}>
          </div>
          <div className="new-button-dropdown">
            <ul className="new-button-ul">
              <li key={1}>
                <img className="checkbox" src={window.checkURL} />
                Task
              </li>
              <li key={2}>
                <img className="clipboard" src={window.clipboardURL} />
                <Link to="/projects/new"
                  className="new-button-dropdown-link">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </>
      )
    }

    return (
      <div className="homepage-nav">
        <label className="home-label">Home</label>
        <div className="home-nav-buttons">
          <div className="home-nav-new-button">
            <button
              className="new-button"
              onClick={() => this.setState({ showNewButtonModal: true })}>
              + New
                    </button>
            {modal}
          </div>
          <div className="hover-div">
            <button
              className="profile-dropdown-button"
              onClick={() => this.props.openModal('profile')}>
              {firstInitial}{lastInitial}
            </button>
            <div className="profile-hover-dropdown-content">
              <label>
                {this.props.first_name} {this.props.last_name}
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;