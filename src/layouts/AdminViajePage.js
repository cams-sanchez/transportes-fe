import React, {Component, Fragment} from 'react';

import HeaderLogin from "../components/Login/HeaderLogin";
import ContentLogin from '../components/Login/ContentLogin';
import FooterLogin from '../components/Login/FooterLogin';

import logo from '../assets/images/logo/logoTransportes.png';

class AdminViajePage  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sitesLogo: logo,
    };
  }

  render() {
    return (
      <Fragment>
        <HeaderLogin state={this.state} />
        <ContentLogin />
        <FooterLogin />
      </Fragment>
    );
  }
}

export default AdminViajePage;
