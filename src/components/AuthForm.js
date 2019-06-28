import logo200Image from '../assets/images/logo/logoTransportes.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class AuthForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const {
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      children,
    } = this.props;

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
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Remember me
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          Login
        </Button>

        {children}
      </Form>
    );
  }
}

AuthForm.propTypes = {
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
};

AuthForm.defaultProps = {
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
};

export default AuthForm;
