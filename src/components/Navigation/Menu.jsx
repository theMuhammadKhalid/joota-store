import React from "react";
import styles from "./Menu.module.css";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { menSelected, womenSelected } from "../../states/actions.js";

export default function Menu({ styleMode }) {
  const { menActive, womenActive } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Link
        to="/men"
        className={
          styleMode === "desktop"
            ? styles.categoryDesktop
            : styles.categoryMobile
        }
        onClick={() => dispatch(menSelected())}
        style={
          menActive
            ? styleMode === "desktop"
              ? { borderBottom: "2px solid black" }
              : { textDecoration: "underline" }
            : null
        }
      >
        Men
      </Link>

      <Link
        to="/women"
        className={
          styleMode === "desktop"
            ? styles.categoryDesktop
            : styles.categoryMobile
        }
        onClick={() => dispatch(womenSelected())}
        style={
          womenActive
            ? styleMode === "desktop"
              ? { borderBottom: "2px solid black" }
              : { textDecoration: "underline" }
            : null
        }
      >
        Women
      </Link>
      <Button
        color="inherit"
        className={
          styleMode === "desktop" ? styles.accountDesktop : styles.accountMobile
        }
      >
        Sign In
      </Button>
      <Button
        color="inherit"
        variant="outlined"
        className={
          styleMode === "desktop" ? styles.accountDesktop : styles.accountMobile
        }
      >
        Sign Up
      </Button>
    </React.Fragment>
  );
}
