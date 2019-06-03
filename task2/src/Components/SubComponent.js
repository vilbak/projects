import React from 'react';
import Input from '@material-ui/core/Input';
import   styles from './StyleComponents';

let input = ()=>{

  return (
    <div>
      <Input
        value="Top"
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',}}
      />
      <Input
        value="Bottom"
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        value = 'Right'
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        value="Left"
        className={styles.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );

      }
export default input;