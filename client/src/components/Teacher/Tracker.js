import React from 'react';
import BehaviorTracker from "../BehaviorTracker/BehaviorTracker";
import radiooptions from "../BehaviorTracker/radiooptions"
import TeachComment from "../TeachComment/TeachComment";
import TeaFileUpload from "../TeaFileUpload/TeaFIleUpload"


function Tracker(props) {

    return (
        <div className="mt-5 ">
            <div className="card teaBeLogTab studentDisplayBoxes col-12 mt-5">

                <div className="card-header bg-none text-white trackerHeader text-center">
                    <h4>Behavior Tracker</h4>
                </div>
                <p>{props.values.selectedNames}</p>






                <div className="card-body ">

                    


                    <table className="table bg-white scoreTable">
                        <thead className="thead-dark bg-dark text-center">
                            <tr>
                                <th scope="col">Category and Score</th>
                                {/* <th scope="col">Score</th> */}

                            </tr>
                        </thead>
                        <tbody className="studentDisplayBoxes">


                            <div className="card">


                                {radiooptions.map(option =>
                                    <div>


                                        <tr>
                                            <th scope="row" className="optionsNameClm">
                                                {option.question}
                                            </th>

                                        </tr>

                                        <tr>



                                            {/* <th scope="row" className="optionsNameClm">
                                            {option.question}
                                        </th> */}




                                            <td scope="row" className="optionsClm ">
                                                <form className="text-center form-check-inline">
                                                    <BehaviorTracker values={props.values} data={option} newSelection={(e) => props.newSelection(e)} />
                                                </form>
                                            </td>


                                        </tr>
                                    </div>
                                )}

                            </div>




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