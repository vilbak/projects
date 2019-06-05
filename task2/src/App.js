import React from 'react';
import './App.css';
import Handler from './Container/ContainerHandler';
import AppRouter from './Router';

class App extends React.Component{
  render (){
    return (<div>
      <Handler /> 
      <AppRouter/>
      </div>)
  }
  
}
export default App