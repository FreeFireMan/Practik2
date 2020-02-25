import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/Button/Button";
import Input from "./components/In/Input";



 export default class App extends React.Component{

     constructor(props) {
         super(props)
         console.log('construktor')

        // this.state={
        //      count : 0,
        //     data: null
        // }
     };

     //способ 2
     state={
        count: 0 ,
         data: null


     }









     plus1= (event)=>{
          this.setState({count:this.state.count +1})
      };

     minus1 = ()=>{
         this.setState({count:this.state.count -1})
     };

     handlerPlus100 = ()=>{
         this.setState({count:this.state.count+100})
     };

     handlerMinus100 = ()=>{
         this.setState({count:this.state.count-100})
     };

     Reset = ()=>{
         this.setState({count:this.state.count = 0})
     };

     inputHandel = ()=>{
         this.setState({count:  + document.getElementById('in').value})

     };
     ResetValue=()=>{
         this.setState({count: document.getElementById('in').value=''})

     }






     componentDidMount() {
         console.log('componentDidMount');

     };



     componentDidUpdate(prevProps, prevState, snapshot) {
         console.log('componentDidUpdate')
         console.log('prevProps')
         console.log(prevProps)
         console.log('prevState')
         console.log(prevState)
     };


     render(){
     console.log('render')
        const {count,data} = this.state;


     return(
         <div>

          <Count count={count}/>
                <input  id="in" type="text" />
             <Button   children={'Add Value'}  myHandler={this.inputHandel}  />
             <Button   children={'Reset Value'}  myHandler={this.ResetValue}/>

             <Button  myHandler={this.plus1}  children={'+1'} />
             <Button myHandler={this.minus1} children={'-1'} />
             <Button myHandler={this.handlerPlus100}  children={'+100'}/>
             <Button myHandler={this.handlerMinus100} children={'-100'} />
             <Button myHandler={this.Reset}  children={'Reset'}/>


         </div>
     )
   }
 };




