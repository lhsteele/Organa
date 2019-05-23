import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({session}) => ({
  first_name: session.first_name,
  last_name: session.last_name
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)