import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

import { EmptyLayout, LayoutRoute } from '../components/Layout';
import Login from '../pages/login/Login';

const LoginRouter = () => {
  return(
    <BrowserRouter >
    <Switch>
      <LayoutRoute
        exact
        path="/login"
        layout={EmptyLayout}
        component={props => (
          <Login {...props} />
        )}
      />
    </Switch>
  </BrowserRouter>
  );
};


export default LoginRouter;

