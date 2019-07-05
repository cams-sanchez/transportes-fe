import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
import Login from '../pages/login/Login';
import TipoCarga from '../pages/catalogs/TipoCarga';

class MainRouter extends React.Component {

  state = {
    permissions: null,
  };

  componentDidMount () {
    //Check on Back end the token and permission. and remove the settimeout that is emuilation the Back end
    setTimeout(() => {
      this.setState({
        permissions: 'b'
      });
    }, 3000);
  }

  securedRoutes = () => {
    const { permissions } = this.state;
    return (
      <React.Fragment>
        <LayoutRoute
          exact
          path="/buttons"
          layout={MainLayout}
          component={ButtonPage}
          permission={permissions}//permisos del usuario
          permissions={['b', 'c']} //permisos del componene
        />
        <LayoutRoute
          exact
          path="/catalogos/tiposdecarga"
          layout={MainLayout}
          component={TipoCarga}
          permission={permissions}
          permissions={['a', 'b']}
        />
      </React.Fragment>
    );
  };

  render () {
    const { permissions } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={props => (
              <Login {...props} />
            )}
          />
          {permissions && this.securedRoutes()}
          {!permissions && <div>Loading</div>}
          <Redirect exact from="/" to="/login"/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;

