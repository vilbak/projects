<<<<<<< HEAD
import React from 'react';
import SwitchesGroup from  '../Components/SubComponent';
import FixedContainer from  '../Components/MainComponent';

class Handler extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
=======
import React, { Component } from 'react';
import SubComponent from  '../Components/SubComponent';
import MainComponent from  '../Components/MainComponent';

class Handler extends Component{
    state = {
        centerPosition: {
            x: 0,
            y: 0
        },
        mousePosition: {
            x: 0,
            y: 0
>>>>>>> 0b7a33ff8f72a02f9694f8e83489dd3eca6bfc1e
        }
    } 

    changeMousePositionState = mousePosition => {
        this.setState((state, props) => { return { 
            ...state,
            mousePosition
         }}, ()=> console.log(this.state))
        

    }

    changeCenterPositionState = centerPosition => {
        this.setState((state, props) => { return { 
            ...state,
            centerPosition
         }})
        

    }

    render (){
        return (<div >
          <MainComponent changeMousePositionState={this.changeMousePositionState} changeCenterPositionState={this.changeCenterPositionState}/>
          <SubComponent positions={this.state}/>
          </div>)
      }
    }
    export default Handler;