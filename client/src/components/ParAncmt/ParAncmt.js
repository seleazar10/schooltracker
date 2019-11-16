import React, { Component } from "react";

import API from "../../utils/API";

class ParAncmt extends React.Component {


  state = {
    announcements: "Oh yes"
  };

  componentDidMount() {
    this.loadAnnouncements();
}

  loadAnnouncements = () => {
    API.getAdminAnnounce()
        .then(res => this.setState({ announcements: res.data[0].announcement }))
        .catch(err => console.log(err));
}

  render() {

    return (
      <div className="container">


        <div className="card parAncmnt mt-2 mb-5">
          <h5 className="card-header bg-dark text-light">Announcements:</h5>
          <div className="card-body text-center">
            <h5>{this.state.announcements}</h5>
          </div>
          <div className="card-footer text-muted">

            <div className="text-center mt-1">

              <button type="button" className="btn btn-primary backBtn pl-5 pr-5"><i
                className="fa fa-arrow-left fa-2x"></i></button>



            </div>

          </div>

        </div>



      </div>
    )
  }
}

export default ParAncmt;