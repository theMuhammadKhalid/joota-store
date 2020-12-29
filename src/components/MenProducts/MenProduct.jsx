import React from "react";
import styles from "./MenProduct.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core/";

export default function MenProduct({ name, price, imageURL }) {
  return (
    <Card className={styles.conatainer}>
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
        <Button className={styles.addToBag} variant="contained">
          ADD TO BAG
        </Button>
      </CardActions>
    </Card>
  );
}
