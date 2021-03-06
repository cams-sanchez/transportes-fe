import LoginForm from '../../components/Forms/LoginForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class Login extends React.Component {
  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <LoginForm />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;
