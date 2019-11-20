import React from "react";

import API from "../../utils/API";
import { CardStuMod, CardTeaMod } from "../AdminCard"
import { Button, Container, Card } from 'react-bootstrap';

class Box2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            teachers: [],
            selectedStudent: '',
            selectedTeacher: ''
        };

        this.handleChangeSelectedStudent = this.handleChangeSelectedStudent.bind(this);

    }

    componentDidMount() {
        API.getStudents()
            .then(res =>
                this.setState({ students: res.data }))
            .catch(err => console.log(err));
        console.log(this.state.students)

        API.getTeachers()
            .then(res =>
                this.setState({ teachers: res.data }))
            .catch(err => console.log(err));
        console.log(this.state.teachers)
    }

    handleChangeSelectedStudent(event) {
        this.setState({ selectedStudent: event.target.value });
    }

    handleSubmitModTeacher(event) {
        event.preventDefault();

    }

    render() {
        const studentList = this.state.students.map(student => (
            <CardStuMod value={this.state.selectedStudent} key={student._id} student={student} onChange={this.handleChangeSelectedStudent} />
        ))

        const teacherList = this.state.teachers.map(teacher => (
            <CardTeaMod key={teacher._id} teacher={teacher} />
        ))

        return (
            <Container onSubmit={this.handleSubmitModTeacher}>
                <Container className="bg-light p-3">
                    <h4>Choose one student:</h4>
                    <div>{studentList}</div>
                </Container>
                <Container className="bg-light p-3">
                    <h4>Choose one teacher:</h4>
                    <div>{teacherList}</div>
                </Container>

                <Button variant="primary" type="submit" value="Submit">
                    Submit
                </Button>

            </Container>
        );
    };

}

export default Box2;