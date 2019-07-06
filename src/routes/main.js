import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
import Login from '../pages/login/Login';
import TipoCarga from '../pages/catalogs/TipoCarga';
import ApiEndPoints from '../config/apiEndPoints';
import axios from 'axios';

class MainRouter extends React.Component {

  apiCall = new ApiEndPoints();

  state = {
    userPermissions: null,
  };

  componentDidMount () {
    //Check on Back end the token and permission. and remove the settimeout that is emuilation the Back end
    let apiCall = this.apiCall.userInfoFromToken();

    if(window.localStorage.getItem('jwt') !== undefined) {
      console.log("We have token");
      let config = {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('jwt')
        }
      };
      axios.get(
        apiCall,
        config,
      ).then( response => {
        if(response.data.success === true) {
          this.setState({userPermissions: response.data.data.role})
        }
        console.log("Response",response.data.data.role);
      }).catch(error => {
        console.log('There was an error ', error);
      });
    }
    console.log("Userperm", this.state.userPermissions);

    setTimeout(() => {
      this.setState({
        userPermissions: 'b'
      });
    }, 1000);
  }

  securedRoutes = () => {
    const { userPermissions } = this.state;
    return (
      <React.Fragment>
        <LayoutRoute
          exact
          path="/buttons"
          layout={MainLayout}
          component={ButtonPage}
          userPermissions={userPermissions}//permisos del usuario
          componentPermissions={['b', 'c']} //permisos del componene
        />
        <LayoutRoute
          exact
          path="/catalogos/tiposdecarga"
          layout={MainLayout}
          component={TipoCarga}
          userPermissions={userPermissions}
          componentPermissions={['a', 'b']}
        />
      </React.Fragment>
    );
  };

  render () {
    const { userPermissions } = this.state;
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
          {userPermissions && this.securedRoutes()}
          {!userPermissions && <Spinner color="info" className="centerSpinner"/>}
          <Redirect exact from="/" to="/login"/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;

