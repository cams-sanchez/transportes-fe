import React from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import { EmptyLayout, LayoutRoute } from '../components/Layout';
import AuthPage from '../pages/AuthPage';

const MainRouter = () => {
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

      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
  );
};


export default MainRouter;

