import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../Login/style.css';
import { Link } from 'react-router-dom'
// import LoginTranslator from './LoginTranslator';

class Loginpage extends Component {
  state = {
    username: "",
    password: ""
  }
   //call an api w username and password
  render() {
    return (
      <Container className="login-container">
        <h2 style={{marginTop: "5px"}}>Sign In</h2>
        {/* <LoginTranslator /> */}
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="name"
                name="username"
                id="username"
                placeholder="MyUserName"
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
          <Button id="submit-btn">
            <Link to='/profile'>Submit</Link>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Loginpage;