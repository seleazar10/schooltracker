import React from "react";

import API from "../../utils/API";
import { CardStuMod, CardTeaMod } from "../AdminCard"
import { Button, Container } from 'react-bootstrap';

class Box2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            teachers: []
        };
    }

    componentDidMount() {
        API.getStudents()
            .then(res =>
                this.setState({ students: res.data }))
            .catch(err => console.log(err));
        console.log(this.state.students)

    }

    render() {
        const studentList = this.state.students.map(student => (
            <CardStuMod student={student}></CardStuMod>
        ))
        return (
            <Container className="bg-light p-3">
                <h4>Choose a student:</h4>
                <div>{studentList}</div>
            </Container>
        );
    };

}

export default Box2;