import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../Profile/style.css";

class ProfileInfo extends Component {
  render() {
    return (
      <div >
        {this.props.profile &&
          this.props.profile.map(
            (i => (
              <Container id="profcontainer" key={i}>
                <Row>
                  <Col>
                    <p>{this.profile.firstname}</p>
                    <p>{this.profile.surname}</p>
                    <p>{this.profile.title}</p>
                    <p>{this.profile.area}</p>
                    <p>{this.profile.bio}</p>
                  </Col>
                </Row>
              </Container>
            ))
          )}
      </div>
    );
  }
}

export default ProfileInfo;
