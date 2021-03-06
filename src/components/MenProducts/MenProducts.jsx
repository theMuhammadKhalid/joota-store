import React, { useEffect } from "react";
import MenProduct from "./MenProduct.jsx";

import { useSelector, useDispatch } from "react-redux";
import { menSelected } from "../../states/actions.js";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function MenProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menSelected());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { products } = useSelector((state) => state);

  return products.length ? (
    <div style={{ margin: "10px" }}>
      <Typography variant="h4" gutterBottom>
        Men products
      </Typography>
      <Grid container spacing={2}>
        {products
          .filter((value) => {
            return value.categories[0].name === "Men" ? true : false;
          })
          .map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MenProduct
                id={product.id}
                name={product.name}
                price={product.price.formatted_with_symbol}
                imageURL={product.media.source}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  ) : (
    <LinearProgress />
  );
}
