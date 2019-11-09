import React from "react";
import "./Teacher.css"

import usersdb from "../../components/Teacher/usersdb";
import UserCard from "../../components/Teacher/UserCard";

import Tracker from "../../components/Teacher/Tracker"
import BehaviorTracker from "../../components/BehaviorTracker/BehaviorTracker";




class Teacher extends React.Component {

  constructor() {
    super()
    this.state = {
      users: usersdb,
      selectedIDs: [],
      pillOneValue: "",
      pillTwoValue: "",
      pillThreeValue: "",
      pillFourValue: "",


    }
    

    this.handleChange = this.handleChange.bind(this)
    this.scrollToTracker = this.scrollToTracker.bind(this)
    this.newSelection = this.newSelection.bind(this)
  }

  newSelection(e){

    
    console.log(e.target.name);
    console.log(e.target.value);
    
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
      <div className="teachBg">
        <div className="container mb-5">

        <div className="">
                <div className="card mt-5 trackerCardBodyBg">
                <div className="card-header bg-dark text-light text-center">
                    <h5>First Hour - Roster</h5>
                </div>
                <div className="card-body">

                {userList}              


                </div>
            </div>
        </div>



         


           <Tracker newSelection={(e)=> this.newSelection(e)}/>


           

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


export default Teacher;
