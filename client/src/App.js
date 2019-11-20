import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

// import logo from './logo.svg';
import Navbar from "./components/Navbar";
// import Auth from "./pages/Auth";
import Chat from "./components/Chat/Chat";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

import Parent from "./pages/Parent/Parent";
import Teacher from "./pages/Teacher/Teacher";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login/Login";
import TeacherProfile from "./components/Teacher/Profile";
// import StudentProfile from "./components/Student/Profile";
import PrivateRoute from "./components/PrivateRoute";
// import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({ loggedIn: false });

  const handleLogin = (user = {}) => {
    setCurrentUser({ ...user, loggedIn: true });
  };

  const authToken = localStorage.getItem("authToken");
  if (authToken && !currentUser.loggedIn) {
    axios
      .post("/api/authtoken", {
        token: authToken
      })
      .then(response => {
        console.log(response);
        handleLogin(response.data);
      });
  }

  console.log(currentUser);
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" render={() => <Login updateUser={handleLogin} />} />
          <Route
            exact
            path="/login"
            render={() => <Login updateUser={handleLogin} />}
          />
          <Route exact path="/parent" component={Parent} />

          {/* TEACHER PROFILE/EDIT PAGE */}
          <PrivateRoute path="/teacher/profile" user={currentUser}>
            <Teacher data={currentUser} />
          </PrivateRoute>
          {/* STUDENT PROFILE/EDIT */}
          {/* <PrivateRoute path="/student/profile" user={currentUser}>
            <StudentProfile user={currentUser} />
          </PrivateRoute> */}
          <Route exact path="/teacher" component={Teacher} />
          <Route path="/chat" component={Chat} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

// // import React from "react";
// import React, { Component } from "react";

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from "axios";
// // import logo from './logo.svg';
// import Navbar from "./components/Navbar";
// // import Auth from "./pages/Auth";
// import Login from "./components/Login/Login";
// import Parent from "./pages/Parent";
// import Teacher from "./pages/Teacher/Teacher";
// import Wrapper from "./components/Wrapper";
// // import './App.css';

// export default class App extends Component {
//   constructor(){
//     super();

//   this.state ={
//     loggedInStatus: "NOT_LOGGED_IN",
//     user:{}

//   }

//   this.handleLogin = this.handleLogin.bind(this);

//   checkLoginStatus(){
//     axios.get("/api/login", {withCredentials:true}).then(respone =>{
//       console.log("Logged in?" , respone);
//       if(respone.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN")
//       this.setState({
//         loggedInStatus: "LOGGED_IN",
//         user: respone.data.user
//       })
//     }
//     }).catch(error => {
//       console.log("Check login error", error);
//     });

//   componentDidMount() {
//     this.checkLoginStatus();
//   }

//   handleLogin(data){
//     this.ListeningStateChangedEvent({
//       loggedInStatus: "LOGGED_IN",
//       user: data.user
//     });
//   }

//   }

//   render() {
//     return (
//       <div className="app">
//         <BrowserRouter>
//           <switch>
//             <Route
//               exact
//               path={"/login"}
//               render={props => (
//                 <Login {...props} loggedInStatus={this.state.loggedInStatusa} />
//               )}
//             />
//             <Route
//               exact
//               path={"/parent"}
//               render={props => (
//                 <Parent
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatusa}
//                 />
//               )}
//             />
//             <Route
//               exact
//               path={"/teacher"}
//               render={props => (
//                 <Teacher
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             />
//           </switch>
//         </BrowserRouter>
//       </div>
//     );
//   }

//   // function App() {
//   // render(){
//   //   return (
//   //     <Router>
//   //       <div>
//   //         <Navbar />
//   //         <Wrapper>
//   //           {/* <Route exact path="/" component={Auth} /> */}
//   //           {/* <Route exact path="/auth" component={Auth} /> */}
//   //           {/* <Route exact path="/login" component={Login} /> */}
//   //           <Route exact path="/login" component={Login} />
//   //           <Route exact path="/parent" component={Parent} />
//   //           <Route exact path="/teacher" component={Teacher} />
//   //         </Wrapper>
//   //       </div>
//   //     </Router>
//   //   );
//   // }
// }

// // export default App;
