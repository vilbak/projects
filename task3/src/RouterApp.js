import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationMenu from './Handlers/index';
import About from './Components/Pages/About/';
import Mouse from './Components/Pages/Mouse/';
import NotFound from './Components/Pages/NotFound/'

const RouterApp =()=>{
    return(

        <Router>
        <NavigationMenu/>
        <Switch>
        <Route exact path ='/' />
        <Route path ='/about' component ={About}/>
        <Route path ='/mouseOn' component ={Mouse}/>
        <Route component ={NotFound}/>

        </Switch>
        </Router>
    )
}
export default RouterApp;