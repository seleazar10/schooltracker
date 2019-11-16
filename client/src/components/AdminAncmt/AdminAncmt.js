import React from 'react';
import parAncmnt from "../ParAncmt/ParAncmt"
import ParAncmt from '../ParAncmt/ParAncmt';

function AdminAncmt() {
    {

        return (
            <div className="container">


                <div className="card parAncmnt mt-2 mb-5">
                    <h5 className="card-header  bg-dark text-light text-center">Announcements</h5>
                    <div className="card-body ">

                        <form>
                            <div class="form-group">

                                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" name="AdminAnnc" ></textarea>

                                <button type="submit" class="btn btn-primary">Submit</button>
                           

                                </div>

                                </form>

                    </div>



                </div>

                <ParAncmt />

                </div>
                )
            }}
            
export default AdminAncmt;