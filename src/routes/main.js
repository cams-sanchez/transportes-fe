import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
import { connect } from 'react-redux';
import allActions from '../redux/actions';
import LoginHelper from '../helpers/LoginHelper';
import CatalogRoutes from '../routes/CatalogRoutes';
import UnidadesRoutes from '../routes/UnidadesRoutes';
import LoginRoutes from './LoginRoutes';
import Login from '../pages/login/Login';

class MainRouter extends React.Component {

  loginHelper = new LoginHelper();

  getUserInfoFromToken = async () => {
    //Check on Back end the token and permission. and remove the settimeout that is emuilation the Back end
    console.log("Checking TokenInfo");
    if(await this.loginHelper.getUserInfofromToken() === true) {
      console.log("Found Permissions", this.loginHelper.loggedUserInfo);
      this.props.SetUserInfo(this.loginHelper.loggedUserInfo);
    }
    console.log("Userperm", this.loginHelper.loggedUserInfo);
  };

  securedRoutes = () => {
    console.log("Secured Roytes");

    const userPermissions = 'b';
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
        <CatalogRoutes userPermissions={userPermissions}/>
        <UnidadesRoutes userPermissions={userPermissions}/>
      </React.Fragment>
    );
  };

  render () {

    if (this.props.permissions.length === 0) {
      this.getUserInfoFromToken();
    }
    const userPermissions = 'b';
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

const mapDispatchToProps= (dispath) =>{
  return {
    SetUserInfo: (loggedUserInfo)=> {dispath(allActions.UserLoginAction.setUserInfo(loggedUserInfo))},
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);

