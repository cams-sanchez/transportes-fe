import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

import { EmptyLayout, LayoutRoute } from '../components/Layout';
import AuthPage from '../pages/AuthPage';

const LoginRouter = () => {
  return(
    <BrowserRouter >
    <Switch>
      <LayoutRoute
        exact
        path="/login"
        layout={EmptyLayout}
        component={props => (
          <AuthPage {...props} />
        )}
      />
    </Switch>
  </BrowserRouter>
  );
};


export default LoginRouter;

