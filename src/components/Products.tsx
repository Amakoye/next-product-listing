import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductItem from "./ProductItem";
import { Product } from "../../types";

interface ComponentProps {
  products: Product[];
}

const Products = ({ products }: ComponentProps) => {
  return (
    <Grid
      item
      container
      direction="row"
      spacing={2}
      sx={{ marginLeft: 2, marginRight: 5 }}
    >
      {products.map((product) => (
        <Grid item key={product.id} lg={2}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
