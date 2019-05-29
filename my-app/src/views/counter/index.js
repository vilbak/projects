import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'


let Counter = (props) =>{
    return (
     <div className="container">
     <Typography variant = "h1" className = "counterText"> {props.count}</Typography>
     <Button variant ="contained" color = "default"  onClick ={ props.incrementCounter} >Increment</Button>
        <Button variant = "contained" color = "default" onClick = {props.decrementCounter}>Decrement</Button>
        <Button variant = "contained" color ="default" onClick = {props.resetCounter}>Reset</Button>

     </div>

    )
}
Counter.propTypes = {
   count: PropTypes.number,
   incrementCounter: PropTypes.func,
   decrementCounter: PropTypes.func,
   resetCounter: PropTypes.func
};
export default Counter;