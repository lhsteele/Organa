import React from 'react'
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './Modal/modal';
import Splash from './Splash/splash_container';
import LoginFormContainer from './Auth/login_form_container';
import SignupFormContainer from './Auth/signup_form_container';
import Home from '../components/Home/home_container';
import ProjectShowContainer from '../components/Projects/project_show_container';
import CreateProjectFormContainer from '../components/Projects/create_project_form_container';


const App = () => (
  <div>
    <Modal />
    <div>
    </div>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/home" component={Home} />
      <Route path="/projects/new" component={CreateProjectFormContainer} />
      <Route path="/projects/:projectId" component={ProjectShowContainer} />
    </Switch>
  </div>
)

export default App