import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import './assets/css/login.css';


import LogingPage from './layouts/LoginPage';
import Dashboard from './layouts/DasboardPage';
import AdminUser from './layouts/AdminUserPage';
import AdminViaje from './layouts/AdminViajePage';

import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={LogingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/user" component={AdminUser} />
      <Route path="/viaje" component={AdminViaje} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
