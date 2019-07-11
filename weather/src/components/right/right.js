import React from 'react';

const right = (props) => {

    return (
        < div className="cityInput" >
            <input value={props.cityName} ></input>
            <button onClick={props.click}>Submit</button>
        </div >
    )
}

export default right;