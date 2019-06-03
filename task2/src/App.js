import React from 'react';
import './App.css';
import FixedContainer from  './Components/MainComponent'
import SwithcesGroup from './Components/SubComponent'



class App extends React.Component{
  render (){
    return (<div >
      <FixedContainer/>,
      <SwithcesGroup />
      </div>)
  }
}
export default App