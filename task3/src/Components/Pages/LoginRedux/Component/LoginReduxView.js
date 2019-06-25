/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './LoginReduxStyle';


const LoginReduxView = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.container} onSubmit={props.handleSubmit}>
      <TextField
        value={props.email}
        onChange={props.changeEmail}
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
        onChange={props.changePassword}
        name="password"
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        className=""
      />
      <Button disabled={!!props.errors.password} positioned="centered" type="submit">Login</Button>

    </form>

  );
};

export default LoginReduxView;
