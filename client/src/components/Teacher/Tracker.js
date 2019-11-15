import React from 'react';
import BehaviorTracker from "../BehaviorTracker/BehaviorTracker";
import radiooptions from "../BehaviorTracker/radiooptions"
import TeachComment from "../TeachComment/TeachComment";
import TeaFileUpload from "../TeaFileUpload/TeaFIleUpload"


function Tracker(props) {

    return (
        <div className="container mt-5">
            <div className="card teaBeLogTab col-12 mt-5">

            <div className="card-header bg-white text-dark text-center">
                <h4>Behavior Tracker</h4>
              </div>
                <p>~~~~DISPLAY NAMES HERE~~~{props.name}</p>
                {/* <h5 className="card-header studentId"> <span></span></h5> */}

                


                <div className="card-body">


                    <table className="table bg-white scoreTable">
                        <thead className="thead-dark bg-success text-center">
                            <tr>
                                <th scope="col">Category and Score</th>
                                {/* <th scope="col">Score</th> */}

                            </tr>
                        </thead>
                        <tbody>


                            {radiooptions.map(option =>
                                <div>

                                    <tr>

                                        <th scope="row" className="optionsNameClm">
                                            {option.question}
                                        </th>



                                        <td scope="row" className="optionsClm ">
                                            <form className="text-center form-check-inline">
                                                <BehaviorTracker values={props.values} data={option} newSelection={(e) => props.newSelection(e)} />
                                            </form>
                                        </td>


                                    </tr>
                                </div>
                            )}




                        </tbody>
                    </table>



                </div>
            </div>




            {/* textbox */}


            <TeachComment values={props.values} newSelection={(e) => props.newSelection(e)} />



            {/* upload btn */}

            <div className="card mt-5">
                <div className="card-header bg-dark text-light">
                    <h5>Share Documents</h5>
                </div>
                <div className="card-body">



                    {/* file Upload */}

                    <TeaFileUpload />


                </div>
            </div>







        </div>




    )

    console.log('tracker')
}


export default Tracker;