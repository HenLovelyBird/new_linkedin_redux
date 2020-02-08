import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../Profile/style.css'


class Profile extends React.Component {
    state = {
        user: ''
    }
    render() {
        return (
            <Container flex >
      <Jumbotron id="bg-cover">
        <h3 className="display-3">Hello, {this.state.user}</h3>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          {/* <Button color="primary"></Button> */}
        </p>
      </Jumbotron>
    </Container>
        );
    }
}

export default Profile;