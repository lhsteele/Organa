import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProfileButtonContainer from './profile_button_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const firstInitial = this.props.first_name[0]
    const lastInitial = this.props.last_name[0]
    return (
      <div>
      <div className="homepage-main">
        <div className="homepage-sidebar">
          <div className="sidebar-logo-group">
            <img className="home-logo-img" src={window.rebelURL} />
            <label className="home-organa">organa</label>
          </div>
        </div>
          <main className="project-index">
            <div className="homepage-nav">
              <label className="home-label">Home</label>
                <div className="home-nav-buttons">
                  <button className="new-button">+ New</button>
                {/* c handler will dispatch the open modal function with 'profile' passed in */}
                  <button 
                    className="profile-dropdown-button" 
                    onClick={() => dispatchEvent(openModal('profile'))}>
                    {firstInitial}{lastInitial}
                  </button>
                </div>
              </div>
          </main>
       </div>
     </div>
    )
  }
}

// const Home = ({ logoutUser }) => {
//   return (
//     <div>
//       <div className="homepage-main">
//         <div className="homepage-sidebar">
//           <div className="sidebar-logo-group">
//             <img className="home-logo-img" src={window.rebelURL} />
//             <label className="home-organa">organa</label>
//           </div>
//         </div>
//         <main className="project-index">
//           <div className="homepage-nav">
//             <label className="home-label">Home</label>
//             <div className="home-nav-buttons">
//               <button className="new-button">+ New</button>
//               {/* Button label should be retrieved from currentUser info */}

//               {/* c handler will dispatch the open modal function with 'profile' passed in */}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )

// }


export default Home