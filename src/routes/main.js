import React from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
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
      <LayoutRoute
        exact
        path="/buttons"
        layout={MainLayout}
        component={ButtonPage}
      />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
  );
};


export default MainRouter;

