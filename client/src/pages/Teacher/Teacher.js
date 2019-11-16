import React from "react";
import "./Teacher.css"

import axios from "axios";
import API from "../../utils/API";
import usersdb from "../../components/Teacher/usersdb";
import UserCard from "../../components/Teacher/UserCard";

import Tracker from "../../components/Teacher/Tracker"
// import BehaviorTracker from "../../components/BehaviorTracker/BehaviorTracker";

class Teacher extends React.Component {

  constructor() {
    super()
    this.state = {
      users: usersdb,
      selectedIDs: [],
      pillOne: "5",
      pillTwo: "5",
      pillThree: "5",
      pillFour: "5",
      teachComnt: "",
      missingWorkOption: "No",
      studentdb: []

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.newSelection = this.newSelection.bind(this)

  }

  componentDidMount() {
    axios.get("/api/student/all/")
      .then(res => {
        this.setState({ studentdb: res.data });
        console.log(this.state.studentdb);
        console.log(this.state.studentdb[0]._id)
      })
  }

  newSelection(e) {


    console.log(e.target.name);
    console.log(e.target.value);

    this.setState({ [e.target.name]: e.target.value })

    console.log(this.state)

  }

  handleChange(id) {

    this.setState((prevState) => {

      const updateSelection = prevState.studentdb.map(userSelection => {

        if (userSelection._id === id) {

          let indexSelected = prevState.selectedIDs.indexOf(id)

          if (indexSelected > -1) {
            userSelection.selected = false;
            prevState.selectedIDs.splice(indexSelected, 1)
          } else {
            userSelection.selected = true;
            prevState.selectedIDs.push(id)
            console.log(prevState.selectedIDs)
          }

        }
        return userSelection
      })
      return {
        users: updateSelection
      }

    })

    console.log('checked ' + id)
  }


  handleClick() {
    this.state.selectedIDs.forEach(id => {
      const studentUpdateObj = {
        pillar1: this.state.pillOne,
        pillar2: this.state.pillTwo,
        pillar3: this.state.pillThree,
        pillar4: this.state.pillFour,
        comments: this.state.teachComnt,
        missingwork: this.state.missingWorkOption
      };
      API.studentEval(id, studentUpdateObj).then((update) => {
        console.log("update worked for student!");
      }).catch(err => console.log(err));
    })
  }

  render() {

    const userList = this.state.studentdb.map(user =>
      <UserCard key={user._id} user={user} handleChange={this.handleChange} />
    )

    return (
      <div className="teachBg">
        <div className="container mb-5">
          <div className="roster">
            <div className="card mt-5 trackerCardBodyBg">
              <div className="card-header bg-dark text-light text-center">
                <h5>First Hour - Roster</h5>
              </div>
              <div className="card-body">
                {userList}
              </div>
            </div>

            {/* {this.state.studentdb.map((user) => {
              if (user.selected) {
                return <div>{user.name + " ----and the student ID is:----- "} {user._id}</div>
              }
            })} */}
          </div>

          <Tracker values={this.state} newSelection={(e) => this.newSelection(e)} />

        </div>

        <footer className="footer card-footer bg-success mt-5"><i className="fa fa-arrow-right fa-4x" onClick={this.handleClick}></i></footer>

      </div>
    )
  }
}

export default Teacher;
