import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import Router from 'next/router'
import Drawer from 'material-ui/Drawer/Drawer';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


export interface HeaderBarProps {
  Title?: string;
  [propsName: string]: any
}


class HeaderBar extends React.Component<any, any>{
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton}
              color="inherit" aria-label="Menu"
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={() => {
                this.setState({ DrawerOpen: true })
                this.handleClose();

              }}>Drawer</MenuItem>
              <MenuItem onClick={() => { Router.push({ pathname: "/form" }) }
              }>Crud表單</MenuItem>
              <MenuItem onClick={() => { Router.push({ pathname: "/fileUpload" }) }
              }>檔案上傳</MenuItem>
              <MenuItem onClick={() => { Router.push({ pathname: "/ReactIntlPage" }) }
              }>多國語系</MenuItem>
              <MenuItem onClick={this.handleClose}>登出</MenuItem>
            </Menu>

            <Drawer
              anchor="bottom"
              open={this.state.DrawerOpen}
              onClose={() => this.setState({ DrawerOpen: false })}
            >
              <Button > 測試一下-效果還不錯 </Button>
            </Drawer>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.Title || ""}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderBar)