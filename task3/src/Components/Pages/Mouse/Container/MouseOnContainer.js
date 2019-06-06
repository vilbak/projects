            
import React, { Component } from 'react';
import SubComponent from  '../Component/InputComponent';
import MainComponent from  '../Component/BlockComponent';

class MouseOn extends Component{
    state = {
        centerPosition: {
            x: 0,
            y: 0
        },
        mousePosition: {
            x: 0,
            y: 0

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
    export default MouseOn;