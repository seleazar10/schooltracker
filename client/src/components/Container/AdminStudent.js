import React from "react";

import API from "../../utils/API";
import { Button, Form, Container } from 'react-bootstrap';


class Box4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            studentEmail: '',
            studentPassword: '',
            missingWork: 'No',
            commentSet: "No comments set"
        };

        // Changes the state for student form to update while typing
        this.handleChangeStudentName = this.handleChangeStudentName.bind(this);
        this.handleChangeStudentEmail = this.handleChangeStudentEmail.bind(this);
        this.handleChangeStudentPassword = this.handleChangeStudentPassword.bind(this);

        this.handleSubmitNewStudent = this.handleSubmitNewStudent.bind(this);
    }

    // Grabs the value of the form and sets the state
    handleChangeStudentName(event) {
        this.setState({ studentName: event.target.value });
    }

    handleChangeStudentEmail(event) {
        this.setState({ studentEmail: event.target.value });
    }

    handleChangeStudentPassword(event) {
        this.setState({ studentPassword: event.target.value });
    }

    // When the submit button is clicked it will post a new teacher to DB, set teacher related state to blank and send a alert
    handleSubmitNewStudent(event) {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.studentName);
        console.log("An email was submitted: " + this.state.studentEmail);
        console.log("A password was submitted: " + this.state.studentPassword);

        // Creates a object that sets database names to the state names
        const newStudentObj = {
            name: this.state.studentName,
            email: this.state.studentEmail,
            password: this.state.studentPassword,
            missingwork: this.state.missingWork,
            comments: this.state.commentSet
        };

        // Makes an axios post that contains the newStudentObj object
        API.saveNewStudent(newStudentObj)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // Sets the state names to blank
        this.setState({
            studentName: '',
            studentEmail: '',
            studentPassword: ''
        });

        // Notify the user that a new student has been submitted
        alert("New Student has been submitted!");
    }



    render() {
        return (
            <Container className="bg-light mb-3 p-2">
                <Form onSubmit={this.handleSubmitNewStudent}>

                    <Form.Group controlId="newStudentName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={this.state.studentName} onChange={this.handleChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId="newStudentEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={this.state.studentEmail} onChange={this.handleChangeStudentEmail} />
                    </Form.Group>

                    <Form.Group controlId="newStudentPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={this.state.studentPassword} onChange={this.handleChangeStudentPassword} />
                    </Form.Group>

                    <Button variant="primary" type="submit" value="Submit">
                        Submit
          </Button>

                </Form>
            </Container>
        );
    }
}

export default Box4;