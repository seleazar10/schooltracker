import React from 'react';

function MissingWork(props) {
    return (

        <div>

            <span>Missing Work? </span>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="MissingWorkOption" id="inlineRadio1" value="Yes" onClick={props.newSelection}/>
                <label className="form-check-label" for="inlineRadio1">Yes</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="MissingWorkOption" id="inlineRadio2" value="No" checked onClick={props.newSelection}/>
                <label className="form-check-label" for="inlineRadio2">No</label>
            </div>
        </div>
    )
}

export default MissingWork;