import React from 'react'
import { Route } from 'react-router-dom'
import Modal from './Modal/modal';
import Splash from './Splash/splash_container';
import LoginFormContainer from './Auth/login_form_container';
import SignupFormContainer from './Auth/signup_form_container';


const App = () => (
  <div>
    <Modal />
    <div>
      <Splash />
    </div>
  </div>
)

export default App