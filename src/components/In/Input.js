import React from 'react';



function Input(props) {

    let inputValue=(event)=>{
        props.inputOnChange(event)
    };


    return (
        <input type="Number" onChange={inputValue}/>
    );
}

export default Input;