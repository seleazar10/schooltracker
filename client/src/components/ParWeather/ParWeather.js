import React from 'react';
import moment from 'moment'; 

import "./style.css"

function ParAncmt() {
  {

    return (
      <div className="container">

        <div className="card parWeather mt-2 mb-5">
          <h5 className="card-header bg-dark text-light">Weather</h5>
          <div className="card-body">

            <div className="row">

              {/* Car Widget */}
              <div className="col-lg-5 col-sm-12 mt-2 mb-">

                <div id="openweathermap-widget-15"></div>

                <p>!!!!!!!!!!Placeholder for weather widget</p>


              </div>

              {/* -------------- */}



              <div className="col-lg-7 col-sm-12 mt-2 mb-2">
                <div className="card">
                  <div className="card-header text-center">
                    <h5 className="localNewsBtn">District-wide School Closure</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-title"> <i className="fa fa-calendar fa-2x" aria-hidden="true"></i> <strong><span
                      className="dateMoment">{moment().format("LLLL")} </span></strong></p>

                      <p></p>


                    <p className="card-text">All schools are opened!</p>

                    <div className="text-center mt-3 ">

                      <a href="https://www.nbcdfw.com/weather/school-closings/" className="btn btn-outline-dark text-center"
                        target="_blank"><i className="fa fa-tv fa-2x"></i>
                        Go To Local News</a>



                    </div>



                  </div>

                  <div className="card-footer  text-muted">

                    <div className="text-center mt-1">

                      <p className="localNewsBtn">DarStar</p>



                    </div>
                  </div>
                </div>


              </div>
            </div>



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