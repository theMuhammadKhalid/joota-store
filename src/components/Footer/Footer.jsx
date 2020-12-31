import React from "react";
import styles from "./Footer.module.css";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div className={styles.conatainer}>
      <Typography className={styles.warning}>
        Note: This is not a real ecommerce website and I am not the owner of
        most of the images used in this website and they belong to{" "}
        <Link href="https://eu.muroexe.com/" target="_blank" color="secondary">
          muroexe
        </Link>{" "}
        and
        <Link href="https://www.nike.com/" target="_blank" color="secondary">
          {" "}
          nike
        </Link>
        .
      </Typography>
      <Typography className={styles.madeBy}>
        Made with ❤️ by{" "}
        <Link
          href="https://themuhammadkhalid.github.io/"
          target="_blank"
          color="error"
        >
          Muhammad Khalid
        </Link>
      </Typography>
    </div>
  );
}
