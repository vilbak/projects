import React from 'react';
import './App.css';
import FixedContainer from  './Containers/MainElement'
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