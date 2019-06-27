import React from 'react';

const ValidationComponent = props => {
    let msg = "Text too short";
    if(props.textLength>5){
        msg = "Text long enough";
    }
    return (
        <label>{msg}</label>
    );
}

export default ValidationComponent;