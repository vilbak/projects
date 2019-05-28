import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


let Counter = (props) =>{
    return (
     <div className="container">
     <Typography variant = "h1" className = "counterText"> {props.count}</Typography>
     <Button variant ="contained" color = "default"  onClick ={() => props.incrementCounter()} >Increment</Button>
        <Button variant = "contained" color = "default" onClick = {() =>props.decrementCounter()}>Decrement</Button>
        <Button variant = "contained" color ="default" onClick = {() =>props.resetCounter()}>Reset</Button>

     </div>

    )
}
export default Counter;