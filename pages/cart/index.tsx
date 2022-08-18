import React from "react";
import Grid from "@mui/material/Grid";
import Cart from "../../src/components/Cart";

const CartPage = () => {
  return (
    <Grid container direction="column" alignContent={"center"}>
      <Cart />
    </Grid>
  );
};

export default CartPage;
