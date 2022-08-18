import * as React from "react";
import Image from "next/image";
import { Product, CartProductItem } from "../../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import imageLoader from "../../imageLoader";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

interface ComponentProps {
  product: Product;
}

const ProductItem = ({ product }: ComponentProps) => {
  /* const product: Product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  }; */

  const dispatch = useDispatch();
  const { addItemToCart, removeItemFromCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const addProductItemToCart = (item: Product) => {
    const cartItem: CartProductItem = {
      ...item,
      quantity: 1,
    };
    console.log(cartItem);
    addItemToCart(cartItem);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: "15rem",
        height: "20rem",
        display: "flex",
        flexDirection: "column",
        paddingTop: 2,
      }}
    >
      {/*  <Image
          loader={imageLoader}
          unoptimized
          src={product.image}
          alt={product.title}
          height="100"
          width="2"
        /> */}
      {/*  <CardMedia
        component="img"
        height="auto"
        image={product.image}
        alt={product.title}
      /> */}

      {/*  <img
        src={product.image}
        alt={product.title}
        width="100"
        height="150"
        
      /> */}
      <Grid
        item
        style={{
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Image
          loader={imageLoader}
          unoptimized
          src={product.image}
          alt={product.title}
          height="150"
          width="100"
        />
      </Grid>

      <CardContent
        component="a"
        href={`/product/${product.id}`}
        sx={{ textDecoration: "none" }}
      >
        <Typography align="center" color="secondary" variant="body1">
          {product.title.length === 20
            ? product.title
            : product.title.slice(0, 20) + "..."}
        </Typography>
        <Typography
          color="secondary"
          align="center"
          variant="body1"
        >{`$${product.price}`}</Typography>
      </CardContent>

      <CardActions>
        <Button
          style={{ marginRight: "auto", marginLeft: "auto" }}
          variant="contained"
          color="secondary"
          /*  size="small" */
          onClick={() => addProductItemToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
