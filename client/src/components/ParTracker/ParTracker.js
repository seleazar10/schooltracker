import React from 'react';
import "./style.css"

function ParTracker() {

    return (
        <div className="container wholeBehavParTab">

            <div class="card behavTab">

                <div className="card-header bg-dark text-light text-center">
                    <h5>Behavior Tracker</h5>
                </div>





                <h5 class="card-header stuNameID"></h5>

                <div class="card-body">

                    <div class="row text-center">

                        <div class="col-lg-6 col-sm-12 text-center">

                            <button type="button" class="btn btn-danger pr-3 pl-3 m-2 colDesBtn disabled">1</button>
                            <button type="button" class="btn btn-warning pr-3 pl-3 m-2 colDesBtn orang disabled">2</button>
                            <button type="button" class="btn btn-warning pr-3 pl-3 m-2 colDesBtn disabled">3</button>
                            <button type="button" class="btn btn-success pr-3 pl-3 m-2 colDesBtn disabled">4</button>
                            <button type="button" class="btn btn-primary pr-3 pl-3 m-2 colDesBtn disabled">5</button>
                        </div>


                        <div class="col-lg-6 col-sm-12 text-center">
                            <p> <span class="dateParent"></span></p>
                        </div>
                    </div>

                    <div class="row">



                        <div class="col-lg-6 col-sm-12 behaviorColor">

                            <div class="colorAverage">
                                <p class="text-center colorNameDisplay"> ~~~~~~~~~Placeholder for dynamic color change upon receiving data (points and caluclate average) from mongo from teacher</p>

                            </div>


                        </div>


                        {/* need to add dyncamically the table below by rendering data from mongo */}

                        <div class="col-lg-6 col-sm-12">
                            <div class="card">

                                <div class="card-body">

                                    <table class="table  bg-white">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Category</th>

                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Respect</th>
                                                <td class="pilOne">~~~</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Kindness</th>
                                                <td class="pilTwo">~~~~</td>

                                            </tr>

                                            <tr>
                                                <th scope="row">On-Task</th>
                                                <td class="pilThree">~~</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Reading and Speaking</th>
                                                <td class="pilFour">~~</td>

                                            </tr>
                                            <tr class="bg-warning text-white">
                                                <th scope="row">Missing Work:</th>
                                                <td class="pilFive">~~</td>

                                            </tr>


                                        </tbody>
                                    </table>





                                </div>
                            </div>
                        </div>





                    </div>





                </div>
            </div>


            <div class="card behavTab mt-3 mb-4">


                <h5 class="card-header bg-dark text-light">Teacher's comment:</h5>
                <div class="card-body">
                    <p class="comToPost"></p>
                    <p>~~~~~~~~~Placeholder to render message from mongo from teacher comment box</p>
                </div>
            </div>

        </div>
    )
}


export default ParTracker;