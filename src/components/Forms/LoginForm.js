import logo200Image from '../../assets/images/logo/logoTransportes.png';
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import LoginHelper from '../../helpers/LoginHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  };

  loginHelper = new LoginHelper();

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log("User Info ", user);
    await this.loginHelper.loginUser(user);

    if(this.loginHelper.userLoggedIn === true) {
      this.props.SetUserInfo(this.loginHelper.loggedUserInfo);
      //this.props.history.push('/catalogos/tiposdecarga');
    }
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
          type="submit"
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

const mapDispatchToProps= (dispath) =>{
  return {
    SetUserInfo: (loggedUserInfo)=> {dispath(allActions.UserLoginAction.setUserInfo(loggedUserInfo))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
