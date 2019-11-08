import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Parent from "./pages/Parent";
import Teacher from "./pages/Teacher";
import Wrapper from "./components/Wrapper";
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Auth} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/parent" component={Parent} />
          <Route exact path="/teacher" component={Teacher} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
