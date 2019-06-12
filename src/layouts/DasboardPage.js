import React, {Component, Fragment} from 'react';

import HeaderLogin from "../components/HeaderLogin";
import ContentLogin from '../components/ContentLogin';
import FooterLogin from '../components/FooterLogin';

import logo from '../assets/images/transportesLogo.png';

class DasboardPage  extends Component{
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

export default DasboardPage;
