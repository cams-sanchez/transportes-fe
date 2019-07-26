import logo200Image from '../../assets/images/logo/logoTransportes.png';
import SourceLink from '../../components/SourceLink';
import React from 'react';

import {
  MdDashboard,
  MdExtension,
  MdKeyboardArrowDown,
  MdLocalShipping,
  MdAirportShuttle,
  MdPeople,
  MdBusiness,
  MdShoppingBasket,
  MdMonetizationOn,
  MdSmsFailed,
  MdEvStation,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';

import bn from '../../utils/bemnames';

const navCatalogos = [
  { to: '/catalogos/establecimiento', name: 'establecimientos', exact: false, Icon: MdBusiness },
  { to: '/catalogos/tipoestablecimiento', name: 'tipo establecimientos', exact: false, Icon: MdBusiness },
  { to: '/catalogos/tiposdecarga', name: 'carga', exact: false, Icon: MdShoppingBasket },
  { to: '/catalogos/tiposdegasto', name: 'gasto', exact: false, Icon: MdMonetizationOn },
  { to: '/catalogos/tiposDeIncidencia', name: 'incidencia', exact: false, Icon: MdSmsFailed },
  { to: '/catalogos/tiposDeMantenimiento', name: 'mantenimiento', exact: false, Icon: MdEvStation },
];

const navItems = [
  { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
  { to: '/viajes', name: 'Viajes', exact: false, Icon: MdLocalShipping },
  { to: '/unidades', name: 'unidades', exact: false, Icon: MdAirportShuttle },
  { to: '/usuarios', name: 'Usuarios', exact: false, Icon: MdPeople },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenCatalogos: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()}>
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                className="pr-2 logoGeneric"
                alt=""
              />
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Catalogos')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Catalogos</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenCatalogos
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenCatalogos}>
              {navCatalogos.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
