import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarIcon from "@material-ui/icons/Star";

const sidebarLinks = [
  {
    to: "/",
    label: "Home",
    icon: InboxIcon
  },
  {
    to: "/about",
    label: "About",
    icon: StarIcon
  }
];

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: "relative",
    whiteSpace: "nowrap",
    width: theme.mixins.sidebar.width,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  iconButton: {
    color: theme.palette.primary.contrastText
  },
  popper: {
    marginLeft: 65
  },
  tooltip: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    transform: `translateX(-15px)`
  },
  listItem: {
    color: theme.palette.primary.contrastText,
    "& svg, & span": {
      color: theme.palette.primary.contrastText
    }
  }
});

class Sidebar extends Component {
  render() {
    const { classes, theme, open, handleDrawerClose } = this.props;

    const listItems = sidebarLinks.map((link, i) => (
      <Tooltip
        id="tooltip-right"
        title={link.label}
        placement="right"
        classes={{ popper: classes.popper, tooltip: classes.tooltip }}
        disableFocusListener={open}
        disableHoverListener={open}
        disableTouchListener={open}
        key={i}
      >
        <ListItem
          button
          className={classes.listItem}
          component={Link}
          to={link.to}
        >
          <ListItemIcon>
            <link.icon />
          </ListItemIcon>
          <ListItemText primary={link.label} />
        </ListItem>
      </Tooltip>
    ));

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.root, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.iconButton}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{listItems}</List>
      </Drawer>
    );
  }
}

Sidebar.defaultProps = {
  open: false
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar);
