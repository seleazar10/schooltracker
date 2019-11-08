// display the home page that should contain the authentication
import React from "react";

import Jumbotron from "../components/Jumbotron";
import { CardAnnouncements, CardAnnModify } from "../components/AdminCard";
import { Col, Col2, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

function Admin() {
    return (
        <div>
            <Jumbotron backgroundImage="../../images/homepageExample.jpg">
                <h1>This is the Admin page</h1>
                <h2>Welcome with a login</h2>
            </Jumbotron>
            <Container >
                <Row>
                    <Col >
                        <Container>
                            <h1 className="text-center">Teacher Department</h1>
                            <Row>
                                <FormBtn>
                                    Create Teacher
                        </FormBtn>
                                <FormBtn>
                                    Modify Teacher
                        </FormBtn>
                                <FormBtn>
                                    Delete Teacher
                        </FormBtn>
                            </Row>
                        </Container>
                    </Col>
                    <Col2>
                        <Container>
                            <h1 className="text-center">Student Department</h1>
                            <Row>
                                <FormBtn>
                                    Create Student
                        </FormBtn>
                                <FormBtn>
                                    Modify Student
                        </FormBtn>
                                <FormBtn>
                                    Delete Student
                        </FormBtn>
                            </Row>
                        </Container>
                    </Col2>
                </Row>
            </Container>
            <Container >
                <CardAnnouncements>
                   
                </CardAnnouncements>
            </Container>
            <Container >
                <CardAnnModify>
                   <TextArea>

                   </TextArea>
                </CardAnnModify>
            </Container>
        </div>


    );
}

export default Admin;