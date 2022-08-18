import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import theme from "../ui/theme";
import Typography from "@mui/material/Typography";
import CartItem from "./CartItem";
import { CartProductItem } from "../../types";
import { State } from "../state";

interface ComponentProps {
  cartItems: CartProductItem[];
}

const Cart = () => {
  const cart: CartProductItem[] = useSelector(
    (state: State) => state.cart.cart
  );

  return (
    <Grid container direction="row" sx={{ marginTop: 3 }}>
      <Grid
        item
        lg={6}
        sx={{
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: 2,
          marginLeft: 5,
          padding: 2,
        }}
      >
        {/* Cart items */}
        {cart.length === 0 && <h3>Cart has 0 items</h3>}
        {cart.map((item) => (
          <CartItem key={item.id} cartProduct={item} />
        ))}
      </Grid>
      <Grid
        item
        sx={{
          border: `1px solid ${theme.palette.grey[300]}`,
          marginLeft: 5,
        }}
        lg={4}
      >
        {/* Cart Details */}
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h5">CART SUMMARY</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">SubTotal</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
