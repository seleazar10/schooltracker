
import React from 'react';

function Tabs(){

    return(


        <div className="container">

        <div className="row text-center">
          <div className="col-lg-3 col-sm-6 parTabOne mb-3">
            <div className="card ">
              <div className="card-body">

                <i className="fa fa-bullhorn fa-4x"></i>
                <p className="card-text markerFont">Announcements</p>

                


              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 parTabTwo mb-3">
            <div className="card">
              <div className="card-body">
               
                <i className="fa fa-calendar fa-4x" aria-hidden="true"></i>
                <p className="card-text markerFont">Calendar</p>
            
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-sm-6 parTabThree mb-3">
            <div className="card">
              <div className="card-body">

                <i className="fa fa-graduation-cap fa-4x" aria-hidden="true"></i>

                
                <p className="card-text markerFont">Grades</p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 parTabFour mb-3">
            <div className="card ">
              <div className="card-body">

                <i className="fa fa-bolt fa-4x" aria-hidden="true"></i>
                <p className="card-text markerFont parTabFour">Weather / Closure</p>
               
              </div>
            </div>

          </div>










        </div>

        </div>


    )
}

export default Tabs;


