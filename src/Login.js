import React, { useState } from 'react';
import { isInRole, login } from './Auth';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history = useHistory();
  const doLogin = () => {
    login('Vivek1', 'password')
      .then((result) => {
        if (result) {
          //redirect
          if (isInRole('admin')) {
            history.push('/admin');
          }
        } else {
          //alert
          history.push('/user');
        }
      })
      .catch((error) => {
        alert('Server error');
      });
  };
  return (
    <>
      <h3>Login</h3>
      <hr />
      <button onClick={doLogin}>Submit Login</button>
    </>
  );
};

export default Login;
