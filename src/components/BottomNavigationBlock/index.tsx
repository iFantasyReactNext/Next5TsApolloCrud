import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

export interface BottomNavigationBlockProps {
  classes?: any;
}
const styles = {
  root: {
    width: 500,

  },
};


class BottomNavigationBlock extends React.Component<BottomNavigationBlockProps, any> {
  constructor(props) {
    super(props)
    this.state = {
      value: 'recents',
    };

  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
        </BottomNavigation>
      </div>
    );
  }
}
export default withStyles(styles)(BottomNavigationBlock)