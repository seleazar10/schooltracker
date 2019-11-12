import React from "react";
import { Button, Form, Container } from 'react-bootstrap';


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherName: '',
      userName: '',
      userEmail: '',
      classroomSub: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeUserEmail = this.handleChangeUserEmail.bind(this);
    this.handleChangeclassroomSub = this.handleChangeclassroomSub.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ teacherName: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ userName: event.target.value });
  }

  handleChangeUserEmail(event) {
    this.setState({ userEmail: event.target.value});
  }

  handleChangeclassroomSub(event) {
    this.setState({ classroomSub: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.teacherName);
    console.log("A username was submitted: " + this.state.userName);
    console.log("An email was submitted: " + this.state.userEmail);
    console.log("A teaching subject was submitted: " + this.state.classroomSub);
    event.preventDefault();
  }

  render() {
    return (
      <Container className="bg-light mb-3 p-2">
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="newTeacherName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={this.state.teacherName} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="newUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={this.state.userName} onChange={this.handleChangeUsername} />
          </Form.Group>

          <Form.Group controlId="newUserEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={this.state.userEmail} onChange={this.handleChangeUserEmail} />
          </Form.Group>

          <Form.Group controlId="newclassroomSub">
            <Form.Label>Classroom Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" value={this.state.classroomSub} onChange={this.handleChangeclassroomSub} />
          </Form.Group>

          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>

        </Form>
      </Container>
    );
  }
}

export default Box;