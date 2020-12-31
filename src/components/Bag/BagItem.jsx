import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
} from "@material-ui/core/";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import styles from "./BagItem.module.css";

import { useDispatch } from "react-redux";
import { updateCartQty, removeFromCart } from "../../states/actions.js";

export default function BagItem({ id, name, price, imageUrl, quantity }) {
  const dispatch = useDispatch();

  return (
    <Card key={id} className={styles.container}>
      <CardMedia image={imageUrl} title={name} className={styles.image} />
      <CardContent className={styles.name}>
        <Typography>{name}</Typography>
      </CardContent>
      <CardActions className={styles.quantity}>
        <IconButton onClick={() => dispatch(updateCartQty(id, quantity - 1))}>
          <RemoveIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton onClick={() => dispatch(updateCartQty(id, quantity + 1))}>
          <AddIcon />
        </IconButton>
      </CardActions>
      <CardContent className={styles.price}>
        <Typography>{price}</Typography>
      </CardContent>
      <CardActions className={styles.removeBtn}>
        <Button color="primary" onClick={() => dispatch(removeFromCart(id))}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
