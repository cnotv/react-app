import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const options = [
  {
    value: '1',
    label: 'Option1',
  },
  {
    value: '2',
    label: 'Option2',
  },
  {
    value: '3',
    label: 'Option3',
  },
];

class GetStarted extends React.Component {
  state = {
    selection: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <Grid
        container
        spacing={24}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" gutterBottom>
              Select a product
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            select
            label="Select an option"
            value={this.state.selection}
            onChange={this.handleChange('selection')}
            className="Dropdown"
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    )
  }
}
export default (GetStarted);
