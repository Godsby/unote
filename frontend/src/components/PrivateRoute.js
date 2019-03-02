import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
  const { isLoggedIn } = props.auth
  if ( isLoggedIn ) {
    return ( 
      <Route {...props} />
    )
  } else {
    return (
      <Redirect to='/users/login' />
    )
  }
}

const mapStateToProps = ( state, ownProps ) => {
  return {
    auth: state.auth,
    ...ownProps
  }
}

export default connect(mapStateToProps,null)(PrivateRoute);