import React from "react";

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Auth from './pages/Auth';
import Parent from "./pages/Parent/Parent";
import Teacher from "./pages/Teacher/Teacher";
import Wrapper from "./components/Wrapper";
import './App.css';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';






const App = () => {
  import Admin from './pages/Admin';
  import Contact from './pages/Contact';
<<<<<<< HEAD
=======

>>>>>>> Darrian_Translator
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Auth} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/parent" component={Parent} />
          <Route exact path="/teacher" component={Teacher} />
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
