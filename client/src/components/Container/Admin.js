import React from "react";

import API from "../../utils/API";
import { Button, Form, Container } from 'react-bootstrap';


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherName: '',
      userName: '',
      userEmail: '',
      classroomSub: '',
      aboutTeacher: '',
      teacherPassword: ''
    };

    // Changes the state for teacher form to update while typing
    this.handleChangeTeacherName = this.handleChangeTeacherName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeUserEmail = this.handleChangeUserEmail.bind(this);
    this.handleChangeclassroomSub = this.handleChangeclassroomSub.bind(this);
    this.handleChangeaboutTeacher = this.handleChangeaboutTeacher.bind(this);
    this.handleChangeteacherPassword = this.handleChangeteacherPassword.bind(this);

    this.handleSubmitNewTeacher = this.handleSubmitNewTeacher.bind(this);
  }

  // Grabs the value of the form and sets the state
  handleChangeTeacherName(event) {
    this.setState({ teacherName: event.target.value });
  }

  handleChangeteacherPassword(event) {
    this.setState({ teacherPassword: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ userName: event.target.value });
  }

  handleChangeUserEmail(event) {
    this.setState({ userEmail: event.target.value });
  }

  handleChangeclassroomSub(event) {
    this.setState({ classroomSub: event.target.value });
  }

  handleChangeaboutTeacher(event) {
    this.setState({ aboutTeacher: event.target.value });
  }

  // When the submit button is clicked it will post a new teacher to DB, set teacher related state to blank and send a alert
  handleSubmitNewTeacher(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + this.state.teacherName);
    console.log("A username was submitted: " + this.state.userName);
    console.log("An email was submitted: " + this.state.userEmail);
    console.log("A teaching subject was submitted: " + this.state.classroomSub);
    console.log("An about teacher was submitted: " + this.state.aboutTeacher);
    console.log("A password was submitted: " + this.state.teacherPassword);

    // Creates a object that sets database names to the state names
    const newTeacherObj = {
      name: this.state.teacherName,
      username: this.state.userName,
      email: this.state.userEmail,
      classroomSubject: this.state.classroomSub,
      aboutMe: this.state.aboutTeacher,
      password: this.state.teacherPassword
    };

    // Makes an axios post that contains the newTeacherObj object
    API.saveNewTeacher(newTeacherObj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      teacherName: '',
      userName: '',
      userEmail: '',
      classroomSub: '',
      aboutTeacher: '',
      teacherPassword: ''
    });

    // Notify the user that a new teacher has been submitted
    alert("New teacher has been submitted!");
  }

  render() {
    return (
      <Container className="bg-light mb-3 p-2">
        <Form onSubmit={this.handleSubmitNewTeacher}>

          <Form.Group controlId="newTeacherName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={this.state.teacherName} onChange={this.handleChangeTeacherName} />
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

          <Form.Group controlId="newaboutTeacher">
            <Form.Label>About Me</Form.Label>
            <Form.Control type="text" placeholder="Enter About Me" value={this.state.aboutTeacher} onChange={this.handleChangeaboutTeacher} />
          </Form.Group>

          <Form.Group controlId="newteacherPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" value={this.state.teacherPassword} onChange={this.handleChangeteacherPassword} />
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