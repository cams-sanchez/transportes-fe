import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import appConfig from '../../config/apiEndPoints';

import axios from "axios/index";

class ContentLogin extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log("User Info ", user);
    let urlApi = appConfig.loginUser ;
    console.log("URL API ",urlApi);
    axios.post( urlApi, user)
      .then(res => {
        const response = res.data;
        console.log('Response from Server ',response);
      })
  };

  render() {
    return (
      <div className="container justify-content-center col-4 border border-dark rounded div-container ">
        <Form className="form-container justify-content-center" onSubmit={this.handleSubmit} >
          <FormGroup row>
            <Label for="exampleEmail" sm={10}>Email</Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Ingresa Tu Email"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={10}>Contraseña</Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword" placeholder="Ingresa Tu Contraseña"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox"/>
              Recordar en este dispositivo
            </Label>
          </FormGroup>
          <Button className="login-button" onClick={this.handleSubmit} >Entrar A La Plataforma</Button>
        </Form>
      </div>
    );
  }
}

export default ContentLogin;

