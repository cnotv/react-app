import React from 'react';
import { Route, Switch } from 'react-router';
 
// Module root components
import Login from './../Pages/Login';
import Welcome from './../Pages/Welcome';
import GetStarted from './../Pages/GetStarted';

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/get-started" component={GetStarted} />
  </Switch>
);