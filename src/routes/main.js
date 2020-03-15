import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import ButtonPage from '../pages/ButtonPage';
import { connect } from 'react-redux';
import allActions from '../redux/actions';
import LoginHelper from '../helpers/LoginHelper';
import CatalogRoutes from '../routes/CatalogRoutes';
import UnidadesRoutes from '../routes/UnidadesRoutes';
import Login from '../pages/login/Login';

class MainRouter extends React.Component {

  loginHelper = new LoginHelper();


getUserInfoFromToken = async () => {

  console.log("We got no permissions on local storage, we're going to try to get them from Server if user is logged");

  let localStorageUserInfo = JSON.parse(this.loginHelper.localStorageHelper.getValueForKey('loggedUserInfo'));

  if( Object.entries(localStorageUserInfo).length === 0) {
    console.log("Getting User info from From Serrver");
    if(await this.loginHelper.getUserInfofromToken() === true) {
      localStorageUserInfo = this.loginHelper.loggedUserInfo
      this.props.SetUserInfo(localStorageUserInfo);
      console.log("We got User Info From Server", );
    } else {
      console.log("User may not be logged in");
    }
  }
};

  securedRoutes = () => {
    console.log("Secured Routes");

    //TODO In some cases, not able to reproduce yet the lenght can no be accessed du undefinied
    //may be related to reloading of the page but still not able to replicate

    //NOTE: This was in render method, but in theory if the user is in login it means that there is nothing
    // on the local storage, but if we want to validate secure routes it means we must have something save

    if (this.props.permissions && this.props.permissions.length === 0) {
      this.getUserInfoFromToken();
    }

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

