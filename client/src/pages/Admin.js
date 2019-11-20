// display the home page that should contain the authentication
import React, { Component } from "react";

import axios from "axios";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Box from "../components/Container/Admin";
import Box2 from "../components/Container/AdminTeaMod";
import Box4 from "../components/Container/AdminStudent";
import { CardAnnouncements, CardAnnModify } from "../components/AdminCard";
import { Col, Col2, Row, Container } from "../components/Grid";
import { TextArea, FormBtn, FormStuBtn } from "../components/Form";

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
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
    this.state = { open: false };
    this.state = { mod: false };

    this.toggleDiv = this.toggleDiv.bind(this);
    this.toggleTMDiv = this.toggleTMDiv.bind(this);
    this.toggleStuDiv = this.toggleStuDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  toggleTMDiv = () => {
    const { mod } = this.state;
    this.setState({ mod: !mod });
  };

  toggleStuDiv = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      modifyAnnouncement: value
    });
  };

  handleSubmit = () => {
    console.log(this.state.modifyAnnouncement);
    this.setState({ announcements: this.state.modifyAnnouncement });
    if (this.state.announcements) {
      // PUT request
      axios
        .put("/api/admin/announcement", {
          announcement: this.state.modifyAnnouncement
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      // POST request
      axios
        .post("/api/admin/announcement", {
          announcement: this.state.modifyAnnouncement
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron backgroundImage="../../images/homepageExample.jpg">
            <h1 className="text-center m-5">DarStar!</h1>
            {/* <h2>Welcome with a login</h2> */}
          </Jumbotron>

          <Container>
            <Row>
              <Col>
                <Container>
                  <h1 className="text-center">Teacher Department</h1>
                  <Row>
                    <FormBtn onClick={this.toggleDiv}>Create Teacher</FormBtn>
                    <FormBtn onClick={this.toggleTMDiv}>Modify Teacher</FormBtn>
                    <FormBtn>Delete Teacher</FormBtn>
                  </Row>
                  {this.state.show && <Box />}
                  {this.state.mod && <Box2 />}
                </Container>
              </Col>

              <Col2>
                <Container>
                  <h1 className="text-center">Student Department</h1>
                  <Row>
                    <FormStuBtn onClick={this.toggleStuDiv}>
                      Create Student
                    </FormStuBtn>
                    <FormBtn>Modify Student</FormBtn>
                    <FormBtn>Delete Student</FormBtn>
                  </Row>
                  {this.state.open && <Box4 />}
                </Container>
              </Col2>
            </Row>
          </Container>

          <Container>
            <CardAnnouncements announcements={this.state.announcements} />
          </Container>

          <Container>
            <CardAnnModify>
              <TextArea
                value={this.state.modifyAnnouncement}
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </CardAnnModify>
          </Container>
        </div>
      </div>
    );
  }
}

export default Admin;
