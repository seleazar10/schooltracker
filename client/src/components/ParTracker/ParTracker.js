import React from 'react';
import "./style.css"

function ParTracker() {

    return (
        <div className="container wholeBehavParTab">

            <div className="card behavTab">

                <div className="card-header bg-dark text-light text-center">
                    <h5>Behavior Tracker</h5>
                </div>





                <h5 className="card-header stuNameID"></h5>

                <div className="card-body">

                    <div className="row text-center">

                        <div className="col-lg-6 col-sm-12 text-center">

                            <button type="button" className="btn btn-danger pr-3 pl-3 m-2 colDesBtn disabled">1</button>
                            <button type="button" className="btn btn-warning pr-3 pl-3 m-2 colDesBtn orang disabled">2</button>
                            <button type="button" className="btn btn-warning pr-3 pl-3 m-2 colDesBtn disabled">3</button>
                            <button type="button" className="btn btn-success pr-3 pl-3 m-2 colDesBtn disabled">4</button>
                            <button type="button" className="btn btn-primary pr-3 pl-3 m-2 colDesBtn disabled">5</button>
                        </div>


                        <div className="col-lg-6 col-sm-12 text-center">
                            <p> <span className="dateParent"></span></p>
                        </div>
                    </div>

                    <div className="row">



                        <div className="col-lg-6 col-sm-12 behaviorColor">

                            <div className="colorAverage">
                                <p className="text-center colorNameDisplay"> ~~~~~~~~~Placeholder for dynamic color change upon receiving data (points and caluclate average) from mongo from teacher</p>

                            </div>


                        </div>


                        {/* need to add dyncamically the table below by rendering data from mongo */}

                        <div className="col-lg-6 col-sm-12">
                            <div className="card">

                                <div className="card-body">

                                    <table className="table  bg-white">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Category</th>

                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Respect</th>
                                                <td className="pilOne">~~~</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Kindness</th>
                                                <td className="pilTwo">~~~~</td>

                                            </tr>

                                            <tr>
                                                <th scope="row">On-Task</th>
                                                <td className="pilThree">~~</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Reading and Speaking</th>
                                                <td className="pilFour">~~</td>

                                            </tr>
                                            <tr class="bg-warning text-white">
                                                <th scope="row">Missing Work:</th>
                                                <td className="pilFive">~~</td>

                                            </tr>


                                        </tbody>
                                    </table>





                                </div>
                            </div>
                        </div>





                    </div>





                </div>
            </div>


            <div className="card behavTab mt-3 mb-4">


                <h5 className="card-header bg-dark text-light">Teacher's comment:</h5>
                <div className="card-body">
                    <p className="comToPost"></p>
                    <p>~~~~~~~~~Placeholder to render message from mongo from teacher comment box</p>
                </div>
            </div>

        </div>
    )
}


export default ParTracker;