import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import User from './User';
import CustomRoute from './CustomRoute';
import Privy from './Privy';
import Unauthorized from './Unauthorized';
import NotFound from './NotFound';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Login} />
        <CustomRoute path='/admin' role={'admin'} component={Admin} />
        <CustomRoute path='/user' role={'user'} component={User} />
        <CustomRoute path='/privy' role={'privy'} component={Privy} />
        <Route path='/unauthorized' component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
