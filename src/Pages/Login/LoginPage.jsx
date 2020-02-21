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
    password: "",
    token: undefined
  }

  login = async()=>{
    let response = await fetch(`http://localhost:7000/users/signin`, {
    method: "POST",
    body: JSON.stringify({ username: this.state.username, password: this.state.password}),
    headers: {
      "Content-Type": "application/json"
    }

    })
    if(response.ok){
        // this.props.history.push('/Profile')
        const token = (await response.json()).access_token
        console.log("response ok")
        this.props.handleLogin(token)
    } else {
        this.setState({
            error: true
        })
    }
}
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
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value})}
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
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value})}
                placeholder="********"
              />
            </FormGroup>
            
          </Col>
          <Button id="submit-btn" onClick={this.login}>
            <Link to='/profile'>Submit</Link>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Loginpage;