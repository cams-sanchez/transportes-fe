import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LogingPage from '../layouts/LoginPage';
import Dashboard from '../layouts/DasboardPage';
import AdminUser from '../layouts/AdminUserPage';
import AdminViaje from '../layouts/AdminViajePage';

const MainRouter = () => {
  return(
    <BrowserRouter >
    <Switch>
      <Route path="/login" component={LogingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/user" component={AdminUser} />
      <Route path="/viaje" component={AdminViaje} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </BrowserRouter>
  );
};


export default MainRouter;

