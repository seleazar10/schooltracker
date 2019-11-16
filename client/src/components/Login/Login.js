import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./style.css";

// https://www.youtube.com/watch?v=QoLUB0QkUaE

class Login extends Component {
  // userData;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
      // loginErrors: ""
      // rememberMe: false
    };

    console.log("login props", this.props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   const rememberMe = localStorage.getItem("rememberMe") === "true";
  //   const user = rememberMe ? localStorage.getItem("user") : "";
  //   this.setState({ user, rememberMe });
  // }

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({
      // [event.target.name]: event.target.value
      [event.target.name]: value
    });
  };
  handleSubmit = userType => {
    const { email, password, rememberMe } = this.state;
    // localStorage.setItem("rememberMe", rememberMe);
    // localStorage.setItem("email", rememberMe ? email : "");
    // localStorage.setItem("password", rememberMe ? password : "");

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
        localStorage.setItem("authToken", response.data.token);
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
            <label>
              <input
                name="rememberMe"
                checked={this.state.rememberMe}
                onChange={this.handleChange}
                type="checkbox"
              />{" "}
              Remember me
            </label>
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
