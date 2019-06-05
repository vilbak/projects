import React from'react';
import NotFound from './Components/NotFound/Error404';
import AboutView from './Components/About/AboutView';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationHandler from './Container/NavigationHandler';


 export default class AppRouter extends React.Component{

    render(){
        return(
           <Router>
           <NavigationHandler/>
           
           <Switch>
           <Route exact path ='/' />
           <Route path = '/about' component ={AboutView}/>
           <Route component = {NotFound}/>
           </Switch>
           </Router> 
        )
    }
}
