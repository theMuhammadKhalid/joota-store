import React from "react";
import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { menSelected, womenSelected } from "../../states/actions.js";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Link
        to="/men"
        className={styles.category}
        onClick={() => dispatch(menSelected())}
      >
        Men
      </Link>
      <Link
        to="/women"
        className={styles.category}
        onClick={() => dispatch(womenSelected())}
      >
        Women
      </Link>
    </div>
  );
}
