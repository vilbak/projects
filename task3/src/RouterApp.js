import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationMenu from './Handlers/index';
import About from './Components/Pages/About';
import Mouse from './Components/Pages/Mouse';
import NotFound from './Components/Pages/NotFound';
import Login from './Components/Pages/Login';
import LoginRedux from './Components/Pages/LoginRedux';
import './App.css';

const RouterApp = () => (

  <Router>
    <NavigationMenu />
    <div className="container">
      <Switch>
        <Route exact path="/" />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/mouseOn" component={Mouse} />
        <Route path="/login-redux" component={LoginRedux} />
        <Route component={NotFound} />

      </Switch>
    </div>
  </Router>
);
export default RouterApp;
