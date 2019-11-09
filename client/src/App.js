
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Auth from './pages/Auth';
import Parent from "./pages/Parent";
import Teacher from "./pages/Teacher";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import './App.css';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';





const App = () => {
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
          <Route path="/contact" component={Contact} />
          <Route path="/chat" component={Chat} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
