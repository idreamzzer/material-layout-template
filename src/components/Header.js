import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const userMenuLinks = [
  {
    to: "/profile",
    label: "Profile",
    icon: AccountCircleIcon
  },
  {
    to: "/cart",
    label: "Cart",
    icon: ShoppingCartIcon
  }
];

const UserMenu = ({
  classes,
  userMenuOpen,
  anchorEl,
  handleMenu,
  handleClose
}) => (
  <div>
    <IconButton
      aria-owns={userMenuOpen ? "menu-appbar" : null}
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
      className={classes.userMenuButton}
    >
      <MoreVertIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={userMenuOpen}
      onClose={handleClose}
    >
      {userMenuLinks.map((link, i) => (
        <MenuItem
          key={i}
          className={classes.userMenuItem}
          component={Link}
          to={link.to}
        >
          <ListItemIcon>
            <link.icon />
          </ListItemIcon>
          <ListItemText inset primary={link.label} />
        </MenuItem>
      ))}

      <Divider />
      <MenuItem className={classes.userMenuItem}>
        <ListItemText inset primary="Logout" />
      </MenuItem>
    </Menu>
  </div>
);

const styles = theme => ({
  root: {
    background: theme.palette.primary.dark,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: theme.mixins.sidebar.width,
    width: `calc(100% - ${theme.mixins.sidebar.width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: theme.palette.primary.contrastText
  },
  hide: {
    display: "none"
  },
  title: {
    flex: 1
  },
  userMenuButton: {
    marginRight: theme.spacing.unit * 2
  },
  userMenuItem: {
    minWidth: 200,
    "&:hover": {
      "& svg, & span": {
        color: theme.palette.primary.main
      }
    }
  }
});

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, open, handleDrawerOpen } = this.props;
    const { anchorEl } = this.state;
    const userMenuOpen = Boolean(anchorEl);

    return (
      <AppBar
        position="absolute"
        className={classNames(classes.root, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open sidebar"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Title
          </Typography>

          <UserMenu
            userMenuOpen={userMenuOpen}
            anchorEl={anchorEl}
            handleMenu={this.handleMenu.bind(this)}
            handleClose={this.handleClose.bind(this)}
            classes={classes}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.defaulProps = {
  open: false
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(Header);
