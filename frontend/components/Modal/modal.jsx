import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../Auth/login_form_container';
import SignupFormContainer from '../Auth/signup_form_container';
import ProfileButtonModalContainer from '../Home/profile_button_modal_container';
import EditProjectFormContainer from '../Projects/edit_project_form_container';

function modalAction ({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'profile':
      component = <ProfileButtonModalContainer />;
      break;
    case 'update':
      component = <EditProjectFormContainer />;
      break;
    default:
      return null;
  }
  let modalComponent;
    if (modal === 'signup' || modal === 'login') {
      modalComponent = <div className="modal-background" onClick={closeModal}>
        < div className="modal-child" onClick={e => e.stopPropagation()} >
          {component}
        </div>
      </div>
    } else if (modal === 'profile') {
      modalComponent = <div className="profile-modal-background" onClick={closeModal}>
        < div className="profile-modal-child" onClick={e => e.stopPropagation()} >
          {component}
        </div>
      </div>
    } else {
      modalComponent = <div className="update-proj-modal-background" onClick={closeModal}>
        < div className="update-proj-modal-child" onClick={e => e.stopPropagation()} >
          {component}
        </div>
      </div>
    }
  return (
    <div>
      {modalComponent}
    </div>
  )
}

const msp = state => {
  return {
    modal: state.ui.modal 
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(modalAction);