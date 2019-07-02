import logo200Image from '../assets/images/logo/logoTransportes.png';
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ApiEndPoints from '../config/apiEndPoints';
import axios from 'axios/index';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    let apicall = new ApiEndPoints();
    console.log("User Info ", user);
    let urlApi = apicall.loginUser() ;
    axios.post( urlApi, user)
      .then(res => {
        const response = res.data;
        if(response.success === true) {
          console.log("We got token");
          window.localStorage.setItem('jwt', response.token);
          this.props.history.push('/catalogos/tipocarga');
        }
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="text-center pb-4">
          <img
            src={logo200Image}
            className="rounded logoLogin"
            alt="logo"
          />
        </div>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" placeholder="tuEmail@email.com" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" placeholder="tu contraseña" onChange={this.handleChange}/>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          Login
        </Button>
      </Form>
    );
  }
}

export default withRouter(LoginForm);
