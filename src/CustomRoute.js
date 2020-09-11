import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthStatus, isInRole } from './Auth';

const CustomRoute = ({ component: Component, role, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      //  Gurad: Authentication
      if (!getAuthStatus()) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }

      //    Guard: Authorization
      if (!isInRole(role)) {
        return <Redirect to={{ pathname: '/unauthorized' }} />;
      }

      //    Route
      return <Component {...props} />;
    }}
  />
);

export default CustomRoute;
