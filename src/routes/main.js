import React from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
import Login from '../pages/login/Login';
import TipoCarga from '../pages/catalogs/TipoCarga';

const MainRouter = () => {
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
      <LayoutRoute
        exact
        path="/buttons"
        layout={MainLayout}
        component={ButtonPage}
      />
      <LayoutRoute
        exact
        path="/catalogos/tiposdecarga"
        layout={MainLayout}
        component={TipoCarga}
      />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
  );
};


export default MainRouter;

