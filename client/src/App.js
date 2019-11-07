import React from "react";
import "./App.css";
import usersdb from "./usersdb";
import UserCard from "./UserCard";

import Tracker from "./Tracker"


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: usersdb,
      selectedIDs: []

    }

    this.handleChange = this.handleChange.bind(this)
    this.scrollToTracker = this.scrollToTracker.bind(this)
  }

  handleChange(id) {

    this.setState((prevState) => {

      const updateSelection = prevState.users.map(userSelection => {
        
        if (userSelection.id === id) {
          // userSelection.selected = !userSelection.selected


          let indexSelected = prevState.selectedIDs.indexOf(id)

          if (indexSelected > -1) {
            userSelection.selected = false;
            prevState.selectedIDs.splice(indexSelected, 1)
          } else {
            userSelection.selected = true;
            prevState.selectedIDs.push(id)
            // console.log(prevState.selectedIDs)
          }

          // if (userSelection.selected) {
          //   userSelection.selected = false;
          // } else {
          //   userSelection.selected = true;
          // }




        }

        return userSelection

      })

      return {

        users: updateSelection

      }

    })




    console.log('checked ' + id)
  }


  scrollToTracker(){
    console.log('clicked')

    this.setState((prevState) => {

    
    console.log(prevState.selectedIDs)
    console.log(prevState.users)
    })

    // console.log(pillOne.val())

    

  }


  render() {

    const userList = this.state.users.map(user =>
      <UserCard key={user.id} user={user} handleChange={this.handleChange} />
    )


    return (
      <div>
        <div className="container mb-5">
          <h1 className="headText text-center">First Hour - Roster</h1>

          {userList}


           <Tracker />

           {this.state.users.map((user) => {
          if (user.selected) { 
            return <div>{user.name + " ----and the student ID is:----- "} {user.id}</div>}
        })}


        </div>

        <footer className="footer card-footer bg-success mt-5"><i className="fa fa-arrow-right fa-4x" onClick={this.scrollToTracker}></i></footer>

      </div>
    )
  }

}


export default App;
