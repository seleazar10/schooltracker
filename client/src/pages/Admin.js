// display the home page that should contain the authentication
import React, { Component } from "react";

import axios from "axios";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Box from "../components/Container/Admin";
import { CardAnnouncements, CardAnnModify } from "../components/AdminCard";
import { Col, Col2, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Admin extends Component {

    state = {
        announcements: "",
        modifyAnnouncement: ""
    };

    componentDidMount() {
       this.loadAnnouncements();
    }

    loadAnnouncements = () => {
        API.getAdminAnnounce()
        .then(res => this.setState({ announcements: res.data[0].announcement }))
        .catch(err => console.log(err));
    }

    constructor(props) {
        super(props)
        this.state = { show: true };
        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
            modifyAnnouncement: value
        });
    };

    handleSubmit = () =>{
        console.log(this.state.modifyAnnouncement)
        this.setState({announcements: this.state.modifyAnnouncement});

        axios.put('/api/admin/announcement', {
            announcement: this.state.modifyAnnouncement
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // const updateAnn = {
        //     announcement: this.state.modifyAnnouncement
        // };
        
        // API.saveAdminAnnounce({ updateAnn })
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
        // .catch(err => console.log(err));
    };


    render() {
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
                                    {/* <div className="col-4 mt-3 mb-4">
                                        <button onClick={this.toggleDiv}>
                                            Toggle Div
                                        </button>
                                    </div> */}
                                    <FormBtn onClick={this.toggleDiv}>
                                        Create Teacher
                        </FormBtn>
                                    <FormBtn>
                                        Modify Teacher
                        </FormBtn>
                                    <FormBtn>
                                        Delete Teacher
                        </FormBtn>
                                </Row>
                                {this.state.show && <Box />}
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
                    <CardAnnouncements announcements={this.state.announcements} />
                </Container>
                <Container >
                    <CardAnnModify>
                        <TextArea 
                        value={this.state.modifyAnnouncement}
                        onChange={this.handleInputChange} />
                        <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                    </CardAnnModify>

                </Container>
            </div>


        );
    };

}

export default Admin;