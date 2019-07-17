import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
import Login from '../pages/login/Login';
import TipoCarga from '../pages/catalogs/TipoCarga';
import LoginHelper from '../helpers/LoginHelper';
import { connect } from 'react-redux';

class MainRouter extends React.Component {

  loginHelper = new LoginHelper();

  state = {
    userPermissions: null,
  };

  async componentDidMount () {
    //Check on Back end the token and permission. and remove the settimeout that is emuilation the Back end
    /*console.log("Checking TokenInfo");
    if(await this.loginHelper.getUserInfofromToken() === true) {
      console.log("Found Permissions", this.loginHelper.loggedUserInfo);
      this.setState({
        userPermissions: this.loginHelper.loggedUserInfo,
      });
    }

    console.log("Userperm", this.state.userPermissions);
    */
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
          {/*!userPermissions && <div>Loading</div>*/}
          <Redirect exact from="/" to="/login"/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps= (reduxState, ownProps) => {
  return {
    email: reduxState.UserLoginReducer.email,
    permissions: reduxState.UserLoginReducer.permissions,
    contacts: reduxState.UserLoginReducer.contacts,
    phoneGear: reduxState.UserLoginReducer.phoneGear
  }
};

export default connect(mapStateToProps)(MainRouter);

