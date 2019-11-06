
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import de from './lang/de';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Auth from './pages/Auth';
import Parent from "./pages/Parent";
import Teacher from "./pages/Teacher";
import Wrapper from "./components/Wrapper";
// import './App.css';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('en');

const Link = (props) => {
  return (
    <Translate
      content={props.content}
      component="a"
      href="" //insert link <------remember---->
      target="_blank"
    />
  )
}

class App extends Component {

  state = {
    lang: 'en'
  }

  onLangChange = (e) => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  }
  render() {
    // tranlation stuff ex. p1, h1, ect
  }
}


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
