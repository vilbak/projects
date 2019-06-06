import React, { Component } from 'react'
import Input from '@material-ui/core/Input';

import styles from './StyleComponents';


export default class SubComponent extends Component {
  
  render() {
    console.log(this.props.positions);
    

     return (
    <div>
      <Input
        value="Top"
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',}}
        disabled={this.props.positions.mousePosition.y >= this.props.positions.centerPosition.y}
      />
      <Input
        value="Bottom"
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        disabled={this.props.positions.mousePosition.y <= this.props.positions.centerPosition.y}
      />
      <Input
        value = 'Right'
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        disabled={this.props.positions.mousePosition.x <= this.props.positions.centerPosition.x}
      />
      <Input
        value="Left"
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        disabled={this.props.positions.mousePosition.x >= this.props.positions.centerPosition.x}
      />
    <br/>
    Center: x {this.props.positions.centerPosition.x} y{this.props.positions.centerPosition.y}
    <br/>
    MousePosition: x {this.props.positions.mousePosition.x} y{this.props.positions.mousePosition.y}
    </div>
  );
  }
}
