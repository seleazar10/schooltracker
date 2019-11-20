import React from 'react';

import axios from "axios";
import API from "../../utils/API";
import "./style.css"

class ParTracker extends React.Component {

    constructor() {
        super()
        this.state = {
            stuName: "",
            pillOne: "",
            pillTwo: "",
            pillThree: "",
            pillFour: "",
            missingWorkOption: "",
            teachComnt: ""
        }
    }

    componentDidMount() {
        axios.get("/api/student/all/")
            .then(res => {
                this.setState({
                    stuName: res.data[0].name,
                    pillOne: res.data[0].pillar1,
                    pillTwo: res.data[0].pillar2,
                    pillThree: res.data[0].pillar3,
                    pillFour: res.data[0].pillar4,
                    missingWorkOption: res.data[0].missingwork,
                    teachComnt: res.data[0].comments
                });
                console.log(res.data[0]);
            })
    }


    render() {

        return (
            <div className="container wholeBehavParTab">

                <div className="card behavTab">

                    <div className="card-header bg-dark text-light text-center">
                        <h5>Behavior Tracker</h5>
                    </div>


                    <h5 className="card-header stuNameID">{this.state.stuName}</h5>

                    <div className="card-body">

                        <div className="row text-center">


                            <div className="col-lg-6 col-sm-12 text-center">
                                <p> <span className="dateParent"></span></p>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 col-sm-12 behaviorColor">

                                <div className="colorAverage">
                                    <p className="text-center colorNameDisplay"> </p>

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
                                                    <td className="pilOne">{this.state.pillOne}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Kindness</th>
                                                    <td className="pilTwo">{this.state.pillTwo}</td>

                                                </tr>

                                                <tr>
                                                    <th scope="row">On-Task</th>
                                                    <td className="pilThree">{this.state.pillThree}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Reading and Speaking</th>
                                                    <td className="pilFour">{this.state.pillFour}</td>

                                                </tr>
                                                <tr class="bg-warning text-white">
                                                    <th scope="row">Missing Work:</th>
                                                    <td className="pilFive">{this.state.missingWorkOption}</td>

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
                        <h5 className="text-center">{this.state.teachComnt}</h5>
                    </div>
                </div>

            </div>
        )
    }
}


export default ParTracker;