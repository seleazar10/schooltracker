import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./style.css";

// https://www.youtube.com/watch?v=QoLUB0QkUaE

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    console.log("login props", this.props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = userType => {
    const { email, password } = this.state;

    axios
      .post(
        "/api/login",
        {
          email: email,
          password: password,
          userType: userType
        },
        { withCredentials: true }
      )
      .then(response => {
        this.props.updateUser(response.data);
        if (userType === "teacher") {
          this.props.history.push("/teacher/profile");
        } else {
          this.props.history.push("/student/profile");
        }

        // if (response.data.status === "created"){
        //   this.props.handleSuccessfulAuth(response.data);
        // }
      })
      .catch(error => {
        console.log("Login error", error);
        this.setState({
          loginErrors: `There was a login error: ${error}`
        });
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="textbox">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <button
              className="btn btn-primary mb-2"
              onClick={() => this.handleSubmit("teacher")}
            >
              Teacher Login
            </button>
            <button
              className="btn btn-primary mb-2"
              onClick={() => this.handleSubmit("student")}
            >
              Student Login
            </button>
          </div>
        </div>
        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
