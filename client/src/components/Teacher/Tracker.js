import React from 'react';
import BehaviorTracker from "../BehaviorTracker/BehaviorTracker";
import radiooptions from "../BehaviorTracker/radiooptions"


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




            <div className="card mt-5">
                <div className="card-header bg-dark text-light">
                    <h5>Teacher's Comment:</h5>
                </div>
                <div className="card-body">

                    <div className="form-group">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>




                </div>
            </div>

{/* upload btn */}

            <form className="mt-3">
                <div classnName="form-group ">
                    <h5>Add missing work or other documents for parent here:</h5>
                    {/* <label for="exampleFormControlFile1">Example file input</label> */}
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
            </form>




        </div>




    )

    console.log('tracker')
}


export default Tracker;