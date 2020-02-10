import React from "react";
import { Jumbotron, Container, Col, Row, Button } from "reactstrap";
import "../Profile/style.css";
import ProfileInfo from "./Components/ProfileInfo";

class Profile extends React.Component {
  state = {
    user: "",
    profile: {}
  };
  render() {
    return (<>
      <Jumbotron fluid id="bg-cover">
        <Container fluid>
          <Row >
            <Col>
              <h2 >Hello, {this.state.user}! Welcome Back!</h2>
              <br />
              <img
                id="profpic"
                src="https://picsum.photos/200"
                alt="profile pic"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <ProfileInfo />

    </>);
  }
}

export default Profile;
