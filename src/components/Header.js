import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ text }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {text}
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Feedback Matters',
};

export default Header;
