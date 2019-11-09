import React from 'react';
import MissingWork from "../MissingWork/MissingWork"

function TeachComment(props){
    return(

        <div className="">
                <div className="card mt-5">
                <div className="card-header bg-dark text-light">
                    <h5>Teacher's Comment:</h5>
                </div>
                <div className="card-body">

                    <div className="form-group">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="teachComnt" onChange={props.newSelection} ></textarea>
                    </div>



                    <div>
                        <MissingWork newSelection={(e) => props.newSelection(e)}/>

                    </div>
                    
                    




                </div>
            </div>
        </div>
    )
}

export default TeachComment;