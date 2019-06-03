import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import  styles from './StyleElements';




let FixedContainer=()=> {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Box boxShadow ={3}>
        <Typography component="div" style = {styles.TodoComponent}/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default FixedContainer;

