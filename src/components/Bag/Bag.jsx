import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSelected, emptyCart } from "../../states/actions.js";

import styles from "./Bag.module.css";
import BagItem from "./BagItem.jsx";

import { Typography, LinearProgress, Button } from "@material-ui/core";

export default function Bag() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartSelected());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { cart } = useSelector((state) => state);

  return Object.keys(cart).length === 0 && cart.constructor === Object ? (
    <LinearProgress />
  ) : (
    <div className={styles.container}>
      <Typography variant="h5" align="center" className={styles.bagTitle}>
        Your bag
      </Typography>
      {cart.line_items.length ? (
        cart.line_items.map(({ id, media, name, price, quantity }, index) => {
          return (
            <BagItem
              key={index}
              id={id}
              name={name}
              price={price.formatted_with_symbol}
              imageUrl={media.source}
              quantity={quantity}
            />
          );
        })
      ) : (
        <Typography variant="h3" className={styles.whenEmpty}>
          {" "}
          Your bag is empty{" "}
        </Typography>
      )}
      <div className={styles.bagFooter}>
        <Typography className={styles.subtotal}>
          Total: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <span>
          <Button
            variant="contained"
            color="secondary"
            className={styles.footerBtn}
            onClick={() => dispatch(emptyCart())}
          >
            Empty Cart
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.footerBtn}
          >
            Checkout
          </Button>
        </span>
      </div>
    </div>
  );
}
