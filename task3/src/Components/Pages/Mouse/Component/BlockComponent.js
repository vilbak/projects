/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import styles from './StyleComponents';

export default class MainComponent extends React.Component {
    coordsCalc = (e) => {
      const width = this._box.clientWidth;
      const height = this._box.clientHeight;

      const centerPosition = {
        x: width / 2,
        y: height / 2,
      };
      const mousePosition = {
        x: e.clientX,
        y: e.clientY,
      };

      this.props.changeCenterPositionState(centerPosition);
      this.props.changeMousePositionState(mousePosition);
    }

    render() {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box boxShadow={3}>
              <Typography onMouseMove={this.coordsCalc} ref={box => this._box = box} component="div" style={styles.TodoComponent} />
            </Box>
          </Container>
        </React.Fragment>
      );
    }
}
