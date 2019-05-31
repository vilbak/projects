import React from 'react';
import logo from './logo.svg';
import './App.css';
import FixedContainer from  './Containers/mainContainer'
import SwithcesGroup from './Containers/subContainer'



class App extends React.Component{
  render (){
    return (<div >
      <FixedContainer/>,
      <SwithcesGroup />
      </div>)
  }
}
export default App