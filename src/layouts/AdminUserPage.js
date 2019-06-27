import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import SideBarUser from '../components/Users/SideBarUser';

class AdminUserPage  extends Component{
  render() {
    return (
      <Fragment>
        <Header />
        <SideBarUser />
      </Fragment>
    );
  }
}

export default AdminUserPage;
