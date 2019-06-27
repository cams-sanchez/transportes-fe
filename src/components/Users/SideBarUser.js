import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { MdPersonAdd, MdPeople, MdPerson} from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import appConfig from '../../config/apiEndPoints';

import axios from "axios/index";

class SideBarUser extends Component {

  render() {
    return (
      <main>
        <aside>
          <h4><MdPerson/>Usuarios</h4>
          <ListGroup>
            <ListGroupItem><MdPersonAdd/>Nuevo</ListGroupItem>
            <ListGroupItem><FaSearch/>Buscar</ListGroupItem>
            <ListGroupItem><MdPeople/>Todos</ListGroupItem>
          </ListGroup>
        </aside>
      </main>
    );
  }
}

export default SideBarUser;

