import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

let FixedContainer=()=> {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Box boxShadow ={3}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh', border:'1px solid'}}   />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default FixedContainer;