import React from "react";
import styles from "./Navigation.module.css";

import Menu from "./Menu.jsx";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Hidden,
  Drawer,
  Divider,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CloseIcon from "@material-ui/icons/Close";

import { useSelector, useDispatch } from "react-redux";
import {
  menuBtnClicked,
  drawerCloseBtnClicked,
  homeSelected,
} from "../../states/actions.js";

import { Link } from "react-router-dom";

export default function Navigation() {
  const { openDrawer, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={styles.container}>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => dispatch(homeSelected())}
        >
          <Typography variant="h2" className={styles.logo}>
            joota
          </Typography>
        </Link>

        <span id="rightSide">
          <Hidden xsDown>
            <Menu styleMode="desktop" />
          </Hidden>

          <Hidden smUp>
            <Drawer variant="persistent" anchor="right" open={openDrawer}>
              <IconButton
                color="inherit"
                aria-label="close"
                style={{ justifyContent: "flex-start", width: "50px" }}
                onClick={() => dispatch(drawerCloseBtnClicked())}
              >
                <CloseIcon />
              </IconButton>
              <Divider />
              <Menu styleMode="mobile" />
            </Drawer>
          </Hidden>

          <Link to="/bag">
            <Badge badgeContent={cart.total_items} color="primary">
              <LocalMallOutlinedIcon style={{ color: "black" }} />
            </Badge>
          </Link>

          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => dispatch(menuBtnClicked())}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </span>
      </Toolbar>
    </AppBar>
  );
}
