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
      selectedNames: [],
      pillOne: "5",
      pillTwo: "5",
      pillThree: "5",
      pillFour: "5",
      teachComnt: "",
      MissingWorkOption: "No",
      studentdb: [],
      teaFileUpload: [],
      show: false

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickTabs = this.handleClickTabs.bind(this)
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

  handleClickTabs() {
    this.setState({
      show: !this.state.show
    })

    // alert('handlick tabs')
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

    alert('form submitted')
  }

  render() {

    const userList = this.state.studentdb.map(user =>
      <UserCard key={user._id} user={user} handleChange={this.handleChange} />
    )

    return (
      <div className="teachBg">
        <div className="container content mt-5">

          <div className="roster">
            <div className="card mt-5 trackerCardBodyBg">
              <div className="card-header trackerHeader bg-dark text-light text-center">
                <h5>First Hour - Roster</h5>
              </div>
              <div className="card-body">
                {userList}
              </div>
            </div>

            {this.state.studentdb.map((user) => {
              if (user.selected) {
                console.log(user.name)

              

                // this.state.selectedNames

                if(!this.state.selectedNames.includes(user.name)){

                  

                  // this.setState((prevState) => {selectedNames: this.state.selectedNames.push(user.name + ", ")})

                }

                
              

                



                // return


              }else{

                let nameSelected = this.state.selectedNames.indexOf(user.name)

                if( nameSelected >-1){


                  this.setState( {selectedNames: this.state.selectedNames.splice(nameSelected, 1)})
                

                  
                  // return 



                  
                }else{
                  
                  
                }

                // let indexSelected = prevState.selectedIDs.indexOf(id)

                // if (indexSelected > -1) {
                //   userSelection.selected = false;
                //   prevState.selectedIDs.splice(indexSelected, 1)
                // } else {
                //   userSelection.selected = true;
                //   prevState.selectedIDs.push(id)
                //   console.log(prevState.selectedIDs)
      
                // }

              }
            })}
          </div>


          {/* hide/show table */}


          {

            this.state.show ?

              <div className="mb-4">
                <Tracker values={this.state} newSelection={(e) => this.newSelection(e)} />

              </div>

              : null

          }


        </div>

        <div className="container card mt-5">

          <div className="card-body">


            <p className=" text-center slogan">To teach is to touch a life forever!</p>

          </div>
        </div>


        {/* <button className="btn btn-primary" onClick={()=>this.handleClickTabs()} >Go Next</button> */}

        {/* <footer className="footer card-footer bg-success mt-5"><i class="fa fa-pencil-square-o fa-4x" aria-hidden="true" onClick={()=>this.handleClickTabs()}></i><i className="fa fa-check-square-o fa-5x" onClick={this.handleClick}></i></footer> */}

        <div class="card-footer fixed-bottom  text-center bg-dark text-white border-success "> Give Points<i class="fa fa-pencil-square-o fa-3x" aria-hidden="true" onClick={() => this.handleClickTabs()}></i><i className="fa fa-check-square-o fa-4x" onClick={this.handleClick}></i> Submit Tracker</div>


      </div>
    )
  }
}

export default Teacher;
