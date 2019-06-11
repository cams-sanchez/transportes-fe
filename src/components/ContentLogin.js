import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ContentLogin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </Col>
          </FormGroup>
          <Button>Entrar</Button>
        </Form>
      </div>
    );
  }
}

export default ContentLogin;

