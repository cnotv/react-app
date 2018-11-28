import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

class Navbar extends React.Component {
  state = {
    auth: true,
  };

  /**
   * Set state on login
   */
  handleChange = event => {
    this.setState({ auth: this.state.auth ? false : true });
  };

  render() {
    const { auth } = this.state;

    return (
      <AppBar position="static">
        <Toolbar className="Navbar">
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Button
            variant="outlined"
            color="inherit"
            className="ButtonOutline"
            onClick={this.handleChange}
          >{auth ? 'Sign up' : 'Logout'}</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default (Navbar);
