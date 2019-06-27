import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        < div className = "Person" >
        <p onClick={props.click}>I'm a {props.name}</p>
        </div >
        
    )
}

export default person;