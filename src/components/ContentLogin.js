import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContentLogin extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChangeEmail = event => {
    this.setState({
        email: event.target.value
    });
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
  };

  render() {
    return (
      <div className="container-fluid justify-content-center col-xl-4 col-lg-4 col-md-4 div-container">
        <Form className="form-container" onSubmit={this.handleSubmit} >
          <FormGroup row>
            <Label for="exampleEmail" sm={10}>Email</Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={10}>Password</Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword" placeholder="password placeholder"
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
          <Button className="login-button" onClick={this.handleSubmit} >Entrar</Button>
        </Form>
      </div>
    );
  }
}

export default ContentLogin;

