import React from 'react';
import BehaviorTracker from "../BehaviorTracker/BehaviorTracker";
import radiooptions from "../BehaviorTracker/radiooptions"
import TeachComment from "../TeachComment/TeachComment"


function Tracker(props) {

    return (
        <div className="container mt-5">
            <div className="card  teaBeLogTab col-12 mt-5">

                <h5 className="card-header bg-dark text-white studentName">Behavior Tacker</h5>
                <p>~~~~DISPLAY NAMES HERE~~~{props.name}</p>
                {/* <h5 className="card-header studentId"> <span></span></h5> */}


                <div class="card-body">


                    <table class="table bg-white ">
                        <thead class="thead-dark bg-success text-center">
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
                                                <BehaviorTracker data={option} newSelection={(e) => props.newSelection(e)} />
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


            <TeachComment newSelection={(e) => props.newSelection(e)} />



            {/* upload btn */}

            <div className="card mt-5">
                <div className="card-header bg-dark text-light">
                    <h5>Share Documents</h5>
                </div>
                <div class="card-body">


                    <form className="mt-3">
                        <div classnName="form-group ">
                            <h5>Add missing work or share documents with parent here:</h5>
                            {/* <label for="exampleFormControlFile1">Example file input</label> */}
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </form>


                </div>
            </div>







        </div>




    )

    console.log('tracker')
}


export default Tracker;