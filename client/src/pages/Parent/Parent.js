// display the parents page that should contain the parent info
import React from "react";
import ParentJumbo from "../../components/ParentJumbo/ParentJumbo";
import Tabs from "../../components/ParTabs/Tabs";
import ParTracker from "../../components/ParTracker/ParTracker";
import Footer from "../../components/Footer/Footer";
import "./Parent.css";

import OpenWeather from "../../components/OpenWeather";

// import AdminAncmt from "../../components/AdminAncmt/AdminAncmt";
// import AdminSclClosure from "../../components/AdminSclClosure/AdminSclClosure";

class Parent extends React.Component {
  render() {
    console.log("props:", this.props);
    return (
      <div className="parentBg">
        <ParentJumbo />

        <OpenWeather />

        <ParTracker id={this.props.data._id} />

        <Tabs />

        <Footer />
      </div>
    );
  }
}

export default Parent;
