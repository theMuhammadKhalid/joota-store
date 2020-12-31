import React from "react";
import styles from "./WomenProduct.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core/";

import { useDispatch } from "react-redux";
import { addToCart } from "../../states/actions.js";

export default function WomenProduct({ id, name, price, imageURL }) {
  const dispatch = useDispatch();

  return (
    <Card className={styles.conatainer} key={id}>
      <CardMedia className={styles.media} image={imageURL} title={name} />
      <CardContent>
        <Typography align="center" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" align="center">
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          className={styles.addToBag}
          variant="contained"
          onClick={() => dispatch(addToCart(id, 1))}
        >
          ADD TO BAG
        </Button>
      </CardActions>
    </Card>
  );
}
