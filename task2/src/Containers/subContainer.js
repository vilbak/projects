import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

function SwitchesGroup() {
  const [state, setState] = React.useState({
    top: false,
    down: false,
    right: false,
    left:false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Where your mouse is</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.top} onChange={handleChange('top')} value="Top" />}
          label="Top"
        />
        <FormControlLabel
          control={<Switch checked={state.down} onChange={handleChange('down')} value="Down" />}
          label="Down"
        />
        <FormControlLabel
          control={
            <Switch checked={state.right} onChange={handleChange('right')} value="Right" />
          }
          label="Right"
        />
        <FormControlLabel
          control={
            <Switch checked={state.left} onChange={handleChange('left')} value="Left" />
          }
          label="Left"
        />
      </FormGroup>
      <FormHelperText>Thank You</FormHelperText>
    </FormControl>
  );
}

export default SwitchesGroup