import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../Login/style.css';
import LoginTranslator from './LoginTranslator';

class Loginpage extends Component {
  render() {
    return (
      <Container className="login-container">
        <h2 style={{marginTop: "5px"}}>Sign In</h2>
        <LoginTranslator />
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button id="submit-btn" color="primary">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Loginpage;