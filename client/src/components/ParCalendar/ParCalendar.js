import React from 'react';
import style from "./style.css"

function ParCalendar() {


    return (

        <div className="container">
            <div className="card parCalend teachPic mt-2 mb-5">
                <h5 className="card-header bg-dark text-light text-center">Calendar</h5>
                <div className="card-body ">

                    <img src="https://i.imgur.com/PkFN3ie.jpg" className="parCalend" alt="schoolCalendSamp"/>



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

export  default ParCalendar;