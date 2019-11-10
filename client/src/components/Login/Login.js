import React, { Component } from "react";
import axios from "axios";

// https://www.youtube.com/watch?v=QoLUB0QkUaE

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

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
        console.log("res from login", response);
        // if (response.data.status === "created"){
        //   this.props.handleSuccessfulAuth(response.data);
        // }
      })
      .catch(error => {
        console.log("Login error", error);
      });
  };

  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <button onClick={() => this.handleSubmit("teacher")}>
          Teacher Login
        </button>
        <button onClick={() => this.handleSubmit("student")}>
          Student Login
        </button>
      </div>
    );
  }
}
