import React, {Component} from 'react';
import './Button.css'


    function Button (props){

        let handlerClick = () =>{

            props.myHandler()



        };




    return(
        <div  >

            <button  className="tret"  onClick={handlerClick} > {props.children} </button>


        </div>

    );
}


export default Button;

