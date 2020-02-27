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

         this.addValue = this.addValue.bind(this);

     };

     //способ 2
     state={
        count: 0 ,
         data: null,
            input:''

     }









     plusMinus= (i)=>{
          this.setState({
              count: + (this.state.count +i)>0 ? this.state.count+ +i:this.state.count+0
          });
      };

     inputHandel = (event)=> {
        this.setState({input:event.target.value})
     };

     addValue=()=>{
         const {count,input} = this.state;
         this.setState({
             count: +(count + +input) > 0 ? count + +input : count + 0
         });
     };

     Reset=()=>{
         this.setState({count:0})

     }




     // ResetValue=()=>{
     //     this.setState({count: 0})
     //
     // }



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
          <Input inputOnChange={this.inputHandel}/>
          <Button myHandler={this.plusMinus} AddVal={this.addValue} resetConter={this.Reset} />



         </div>
     )
   }
 };




