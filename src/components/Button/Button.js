import React, {Component} from 'react';
import './Button.css'


    function Button (props){

        let handlerClick = (i) =>{

            props.myHandler(i)



        };
        let AddValue = () =>{

            props.AddVal()



        };
        let resetCount = () =>{

            props.resetConter()

        };



    return(
        <div >
            <button  className="tret"  onClick={handlerClick.bind(null,1)} > ADD1 </button>
            <button  className="tret"  onClick={handlerClick.bind(null,-1)} > minus1</button>
            <button  className="tret"  onClick={handlerClick.bind(null,100)} > ADD100 </button>
            <button  className="tret"  onClick={handlerClick.bind(null,-100)} > minus100</button>
            <button  className="tret"  onClick={AddValue} > addValue</button>
            <button  className="tret"  onClick={resetCount} > Reset</button>

        </div>

    );
}


export default Button;

