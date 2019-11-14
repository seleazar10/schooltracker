import React from 'react';

function AdminSclClosure(){

    return(
        <div className="container">


                <div className="card parClosure mt-2 mb-5">
                    <h5 className="card-header  bg-dark text-light text-center">School Closure</h5>
                    <div className="card-body ">

                        <form>
                            <div class="form-group">

                                <textarea className="form-control" id="exampleFormControlTextarea3" rows="3" name="sclClosure" ></textarea>

                                <button type="submit" class="btn btn-primary">Submit</button>
                           

                                </div>

                                </form>

                    </div>



                </div>

               

                </div>
    )
}

export default AdminSclClosure;