import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Login extends React.Component {
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
          <TextField
            label="Username"
            defaultValue="Sara Smith"
          />
        </Grid>

        <Grid item>
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
          
        <Grid item>
          <Button
            variant="contained"
            color="primary"
          >
            {/* <Link to="/welcome"> */}
              Login
            {/* </Link> */}
          </Button>
        </Grid>
      </Grid>
    )
  }
}
export default (Login);
