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
  MdAdd,
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
  { to: '/catalogos/tipoincidencia', name: 'incidencia', exact: false, Icon: MdSmsFailed },
  { to: '/catalogos/tipomantenimiento', name: 'mantenimiento', exact: false, Icon: MdEvStation },
];

const navUnidades = [
  { to: '/unidades/crear', name: 'Alta Unidades', exact: false, Icon: MdAdd },
  { to: '/unidades/manto/prog', name: 'Programar Mantenimiento', exact: false, Icon: MdEvStation },
  { to: '/unidades/manto/ver', name: 'Ver Mantenimiento', exact: false, Icon: MdEvStation },
  { to: '/unidades/gastos/ver', name: 'Ver Gastos', exact: false, Icon: MdMonetizationOn },
  { to: '/unidades/gastos/agragar', name: 'Agregar Gastos', exact: false, Icon: MdMonetizationOn },
];

const navTiros = [
  { to: '/tiros/', name: 'Todos Los Tiros', exact: false, Icon: MdEvStation },
  { to: '/tiros/crear', name: 'Crear Un Tiro', exact: false, Icon: MdAdd },
  { to: '/tiros/upload/excel', name: 'Cargar Tiros En Excel', exact: false, Icon: MdEvStation },
  { to: '/tiros/upload/evidencias', name: 'Subir Evidencias', exact: false, Icon: MdEvStation },
  { to: '/tiros/elimnar', name: 'Eliminar Un Tiro', exact: false, Icon: MdEvStation },
];

const navItems = [
  { to: '/dashboard', name: 'Dashboard', exact: true, Icon: MdDashboard },
  { to: '/viajes', name: 'Viajes', exact: false, Icon: MdLocalShipping },
  { to: '/usuarios', name: 'Usuarios', exact: false, Icon: MdPeople },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenCatalogos: false,
    isOpenUnidades: false,
    isOpenTiros: false,
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
                onClick={this.handleClick('Tiros')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdAirportShuttle className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Tiros</span>
                </div>
                <MdKeyboardArrowDown
                    className={bem.e('nav-item-icon')}
                    style={{
                      padding: 0,
                      transform: this.state.isOpenTiros
                          ? 'rotate(0deg)'
                          : 'rotate(-90deg)',
                      transitionDuration: '0.3s',
                      transitionProperty: 'transform',
                    }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenTiros}>
              {navTiros.map(({ to, name, exact, Icon }, index) => (
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


            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Unidades')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdAirportShuttle className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Unidades</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenUnidades
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenUnidades}>
              {navUnidades.map(({ to, name, exact, Icon }, index) => (
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
