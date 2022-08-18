import React from "react";
import Image from "next/image";
import imageLoader from "../../imageLoader";

import theme from "../ui/theme";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartProductItem } from "../../types";

interface ComponentProps {
  cartProduct: CartProductItem;
}

const CartItem = ({ cartProduct }: ComponentProps) => {
  /* const item = {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
    quantity: 1,
  }; */
  return (
    <Grid
      container
      direction={"column"}
      sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
    >
      <Grid item mt={1}>
        <Grid container alignItems={"center"}>
          <Grid item sm sx={{ marginLeft: 2 }}>
            <Image
              loader={imageLoader}
              unoptimized
              src={cartProduct.image}
              alt={cartProduct.title}
              height="80"
              width="50"
            />
          </Grid>
          <Grid item sm>
            <Typography variant="h6">{cartProduct.title}</Typography>
          </Grid>
          <Grid item sm sx={{ marginRight: 2 }}>
            <Typography align="right" variant="h6">
              ${cartProduct.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems={"center"}>
          <Grid item>
            <IconButton>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <IconButton>
              <AddIcon color="secondary" />
            </IconButton>
            <Typography>{cartProduct.quantity}</Typography>
            <IconButton>
              <RemoveIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartItem;
