import React from 'react';


function ParGrade() {
    return (
        <div className="container">


            <div className="card parAttendGrade mt-2 mb-5">
                <h5 className="card-header text-center">Attendance and Grades</h5>
                <div className="card-body ">

                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="card">
                                <div className="card-body">

                                    <table className="table attenTab  text-center">
                                        <thead>
                                            <tr className="bg-dark text-white">
                                                <th scope="col">Month</th>
                                                <th scope="col">October</th>
                                                <th scope="col">November</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-left">Total days </th>
                                                <td>17</td>
                                                <td>3~</td>



                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-left">Present </th>
                                                <td>13</td>
                                                <td>3</td>



                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-left">Tardy</th>
                                                <td>3</td>
                                                <td>0</td>



                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-left">Absent</th>
                                                <td>4</td>
                                                <td>0</td>



                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-left">Ratio</th>
                                                <td className="bg-danger">76%</td>
                                                <td className="bg-success">100%</td>



                                            </tr>

                                        </tbody>
                                    </table>



                                </div>
                            </div>
                        </div>



                        <div className="col-lg-4 col-sm-12 powerschoolLink">



                            <div className="card">
                                <h5 className="card-header text-center">Grades</h5>
                                <div className="card-body powerSchool text-center">

                                    <a href="https://help.powerschool.com/t5/Enrollment-Registration/Powerschool-Parent-Portal-Access/ta-p/13" target="_blank">
                                        {/* <Image src="https://imgur.com/C1YnXpg" className="PS" /> */}

                                        <img src="https://i.imgur.com/JEO5Lly.png" className="powerschoolImg" alt="PS Image"/>

                                        
                                
                                    </a>

                                </div>
                            </div>



                        </div>
                    </div>



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

export default ParGrade;