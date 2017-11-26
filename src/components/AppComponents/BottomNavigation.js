/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import Contact from 'material-ui-icons/Contacts';


const styles = {
  root: {
    //width: 500,
    //spacing: '20px',
    //marginTop: '20px',
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'map',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleChange(value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationButton label="Contact Me" value="contact" icon={<Contact />} />
        <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationButton label="Map" value="map" icon={<LocationOnIcon />} />
        <BottomNavigationButton label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);