import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './LoginViewStyle';
import Button from '@material-ui/core/Button';


const LoginView = (props) => {
    const classes = useStyles();
    return (
          <form className={classes.container} onSubmit={props.handleSubmit}>
          <TextField 
          value={props.email}
          onChange ={props.handleChange}
        id="filled-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
      />

           <TextField
           value={props.password}
           onChange ={props.handleChange}
           name="password"
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        className=''/>
      <Button disabled={!!props.errors.password} positioned ='centered'type='submit'>Login</Button>

          </form>
      
    )
}

export default LoginView
