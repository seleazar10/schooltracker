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
        this.handleChangeSelectedTeacher = this.handleChangeSelectedTeacher.bind(this);
        this.handleSubmitModTeacher = this.handleSubmitModTeacher.bind(this);
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

    handleChangeSelectedTeacher(event) {
        this.setState({ selectedTeacher: event.target.value });
    }

    handleSubmitModTeacher(event) {
        event.preventDefault();
        const { selectedTeacher, selectedStudent } = this.state;
        API.associateStudent(selectedTeacher, selectedStudent)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        const studentList = this.state.students.map(student => (
            <CardStuMod value={this.state.selectedStudent} name='student' key={student._id} student={student} />
        ))

        const teacherList = this.state.teachers.map(teacher => (
            <CardTeaMod key={teacher._id} teacher={teacher} name='teacher' />
        ))

        return (
            <Container>
                <Container className="bg-light p-3">
                    <form onChange={this.handleChangeSelectedStudent}>
                        <h4>Choose one student:</h4>
                        <div>{studentList}</div>
                    </form>
                </Container>
                <Container className="bg-light p-3">
                    <form onChange={this.handleChangeSelectedTeacher}>
                    <h4>Choose one teacher:</h4>
                    <div>{teacherList}</div>
                    </form>
                </Container>

                <Button variant="primary" type="submit" value="Submit" onClick={this.handleSubmitModTeacher}>
                    Submit
                </Button>

            </Container>
        );
    };

}

export default Box2;