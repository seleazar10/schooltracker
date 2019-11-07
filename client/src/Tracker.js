import React from 'react';


function Tracker(props) {
    return (
        <div className="container">
            <div className="card  teaBeLogTab col-12 mt-3">

                <h5 className="card-header bg-white studentName">Student Names:</h5>
                <h5>{props.name}</h5>
                {/* <h5 className="card-header studentId"> <span></span></h5> */}




                <div class="card-body">


                    <table class="table bg-white ">
                        <thead class="thead-dark bg-success text-center">
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Score</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Respect</th>
                                <td>
                                    <form className="text-center">

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option1"
                                                    checked={true}
                                                    className="form-check-input pillOne"
                                                // checked={this.state.selectedOption === "option3"}
                                                // onChange={this.handleOptionChange}
                                                />
                                                1
                                            </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option2"
                                                    className="form-check-input"
                                                />
                                                2
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option3"
                                                    className="form-check-input"
                                                />
                                                3
  </label>
                                        </div>
                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option4"
                                                    className="form-check-input"
                                                />
                                                4
  </label>
                                        </div>
                                        <div className="form-check form-check-inline ">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option5"
                                                    className="form-check-input"
                                                />
                                                5
  </label>
                                        </div>


                                    </form>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">Kindness</th>
                                <td>
                                    <form className="text-center">

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option1"
                                                    checked={true}
                                                    className="form-check-input"
                                                // checked={this.state.selectedOption === "option3"}
                                                // onChange={this.handleOptionChange}
                                                />
                                                1
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option2"
                                                    className="form-check-input"
                                                />
                                                2
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option3"
                                                    className="form-check-input"
                                                />
                                                3
  </label>
                                        </div>
                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option4"
                                                    className="form-check-input"
                                                />
                                                4
  </label>
                                        </div>
                                        <div className="form-check form-check-inline ">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option5"
                                                    className="form-check-input"
                                                />
                                                5
  </label>
                                        </div>


                                    </form>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">On-Task</th>
                                <td>
                                    <form className="text-center">

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option1"
                                                    checked={true}
                                                    className="form-check-input"
                                                // checked={this.state.selectedOption === "option3"}
                                                // onChange={this.handleOptionChange}
                                                />
                                                1
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option2"
                                                    className="form-check-input"
                                                />
                                                2
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option3"
                                                    className="form-check-input"
                                                />
                                                3
  </label>
                                        </div>
                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option4"
                                                    className="form-check-input"
                                                />
                                                4
  </label>
                                        </div>
                                        <div className="form-check form-check-inline ">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option5"
                                                    className="form-check-input"
                                                />
                                                5
  </label>
                                        </div>


                                    </form>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">Listening Skills</th>
                                <td>
                                    <form className="text-center">

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option1"
                                                    checked={true}
                                                    className="form-check-input"
                                                // checked={this.state.selectedOption === "option3"}
                                                // onChange={this.handleOptionChange}
                                                />
                                                1
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option2"
                                                    className="form-check-input"
                                                />
                                                2
  </label>
                                        </div>

                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option3"
                                                    className="form-check-input"
                                                />
                                                3
  </label>
                                        </div>
                                        <div className="form-check form-check-inline pr-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option4"
                                                    className="form-check-input"
                                                />
                                                4
  </label>
                                        </div>
                                        <div className="form-check form-check-inline ">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="option5"
                                                    className="form-check-input"
                                                />
                                                5
  </label>
                                        </div>


                                    </form>
                                </td>

                            </tr>


                        </tbody>
                    </table>



                </div>
            </div>

        </div>




    )

    console.log('tracker')
}


export default Tracker;