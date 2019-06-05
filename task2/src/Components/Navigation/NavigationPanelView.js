import React from 'react';
import {  Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';



const  NavigationMenu =() =>{
    
        return(
            <div>
            <AppBar >
            <Tabs value={this.props.value} onChange={this.props.handleChange}>
            <Tab label="About" value="/about" component={Link} to="about" />
       
        
            </Tabs>
            </AppBar>

        </div>
        )
    }

NavigationMenu.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    handleChange: PropTypes.func.isRequired
  };
  
  export default NavigationMenu;
