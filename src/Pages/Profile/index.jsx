import React from "react";
import { Jumbotron, Container, Col, Row, Button } from "reactstrap";
import "../Profile/style.css";
// import ProfileInfo from "./Components/ProfileInfo";
import GETProfile from '../../APIs/Profile/getProfile.js'
import ProfileInfo from "./Components/ProfileInfo";


class Profile extends React.Component {
  state = {
    user: {
      username: ""
    },
    profile: {
      firstname: "",
      surname: "",
      title: "",
      area: "",
      bio: ""
    }
  };

  componentDidMount = async () => {
    let response = await GETProfile();
    this.setState({
      profile: response
    })
    console.log(response)
  }

  // uploadPic = async () => {

  // }

  render() {
    // const greeting = `Hello, ${this.state.profile.username}!`
    return (<>
      <Jumbotron fluid id="bg-cover">
        <Container fluid>
          <Row >
            <Col>
              <h2 id="greeting">Hello, Welcome Back!</h2>
              <br />
              <img
                id="profpic"
                src="https://picsum.photos/200"
                alt="profile pic"
              />
              <Col><Button value="edit" id="editpic-btn" >Upload a New Pic</Button></Col>
              
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <ProfileInfo profile={this.state.profile} />

    </>);
  }
}

export default Profile;
