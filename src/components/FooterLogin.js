import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class FooterLogin extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <footer className="container-fluid">
        <Nav className="justify-content-center">
          <NavItem>
            <NavLink href="#" className="footer-link">Acerca De Nosotros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="footer-link">Contacto</NavLink>
          </NavItem>
        </Nav>
      </footer>
    );
  }
}

export default FooterLogin
