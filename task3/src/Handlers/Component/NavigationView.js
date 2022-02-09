/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavigationView = props => (
  <div>
    <AppBar>
      <Tabs centered value={props.value} onChange={props.handleChange}>
        <Tab label="About" value="/about" component={Link} to="about" />
        <Tab label="MouseOn" value="/mouseOn" component={Link} to="mouseOn" />
        <Tab label="Login " value="/login" component={Link} to="login" />
        <Tab label="LoginRedux" value="/login-redux" component={Link} to="login-redux" />
      </Tabs>
    </AppBar>
  </div>
);

export default NavigationView;
