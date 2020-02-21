import React from 'react';
import { Button, Input, Row, Container, Col } from 'reactstrap'
import io from "socket.io-client"
// import Moment from 'react-moment';

class Chat extends React.Component {
    socket = null;

    state = {
        messages: [],
        messageText: "",
        username: "",
        password: "",
        token: "",
        to: "",
        connectedUsers: [],
        user: {
            _id: '',
            username: '',
            avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
        }
    }

  configSocketIO = () => {
    this.socket = io('http://localhost:7000', {
      transports: ['websocket']
    })

    this.socket.on("message", payload => {
        this.setState({
          messages: this.state.messages.concat(payload)
        })
      })

    this.socket.on("login", (user) => {
        console.log(user.newUser + " is connected")
        this.setState({
          connectedUsers: user.connectedUsers
        })
      })
    }

    handleToken = async () => {
        if (localStorage.getItem("token")) { // if we have a token
          const resp = await fetch("http://localhost:7000/auth/refresh", {  //we test it 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          })
          if (resp.ok){ //if it's valid, we fetch messages
            const json = await resp.json();
            this.setState({ token: json.access_token, username: json.user.username })
            this.socket.emit("login", { token: localStorage.getItem("token")  })
            const respMessages = await fetch("http://localhost:7000/message", {
              headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
              }
            })
            
            const msgs = await respMessages.json()
            this.setState({
              messages: msgs
            })
    
          }
          else{ //else, we remove the token (it's probably expired!)
            localStorage.removeItem("token")
          }
      }
    }

    componentDidMount = async () => {
        this.configSocketIO()
        this.handleToken()
    }

    sendMessage = () => {
        const payload = {
          message: this.state.messageText,
          from: this.state.username,
          to: this.state.to,
          date: new Date()
        }
        this.socket.emit("message", payload)
        this.setState({
          messageText: "",
          messages: this.state.messages.concat(payload)
        })
      }

      login = async () => {
        const resp = await fetch("http://localhost:7000/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const json = await resp.json();
        this.setState({ token: json.access_token })
        localStorage.setItem("token", json.access_token)
    
        this.socket.emit("login", { token: json.access_token })
      }

    render() {
        return (<>
        {/* area for login for chat */}

        <Container className="k-bubble">
            <h6>The message text is {this.messages.messageText}</h6>
            <Row>
                <Col>
                <Input type="text" 
                        value={this.state.username} 
                        onChange={(e) => 
                        this.setState({ username: e.currentTarget.value })} /> 
                </Col>
                <Col>
                <Input type="password" 
                        value={this.state.password} 
                        onChange={(e) => 
                        this.setState({ password: e.currentTarget.value })}/>
                </Col>
            </Row>

            <Button onClick={this.login} value="Login">Login</Button>
        </Container>
        
        {/* area for chat after login */}
        <Container>
        <Chat 
            user={this.user}
            messages={this.state.messages}
            onMessageSend={this.addNewMessage}
            width={400} 
            onChange={(e) => this.setState ({messageText: e.currentTarget.value})}>
        <select onChange={e => this.setState({ to: e.currentTarget.value })}></select>
        <Button id="sendmsg" onChange={this.sendMessage}>Send Msg</Button>
        </Chat>
        </Container>
        </>);
    }

}


export default Chat;



