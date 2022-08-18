import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Product } from "../../types";
import imageLoader from "../../imageLoader";
import { Typography } from "@mui/material";
import theme from "../../src/ui/theme";

const ProductPage = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      justifyContent="center"
    >
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: 2,
            marginTop: 2,
            marginRight: "auto",
            marginLeft: "auto",
          }}
          lg={6}
        >
          <Grid item md={6} sx={{ padding: 5 }}>
            <Image
              loader={imageLoader}
              unoptimized
              src={product.image}
              alt={product.title}
              height="400"
              width="300"
              style={{ marginRight: "auto", marginLeft: "auto" }}
            />
          </Grid>
          <Grid item md={6}>
            <Grid container direction="column">
              <Grid item>
                <Typography sx={{ marginTop: 0, marginBottom: 1 }} variant="h5">
                  {product.title}
                </Typography>
                <Typography>
                  Category:
                  <span style={{ color: `${theme.palette.secondary}` }}>
                    {product.category.slice(0, 1).toUpperCase() +
                      product.category.slice(1)}
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  textAlign: "justify",
                  marginRight: 5,
                  marginTop: 2,
                  paddingTop: 2,
                  borderTop: "1px solid grey",
                }}
              >
                <Typography>
                  {product.description.slice(0, 1).toUpperCase() +
                    product.description.slice(1)}
                </Typography>
                <Button
                  sx={{
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: 3,
                    marginBottom: 2,
                  }}
                  variant="contained"
                  color="secondary"
                  /*  size="small" */
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await await fetch(
    `https://fakestoreapi.com/products/${context.query.id}`
  );

  console.log(res);
  const product = await res.json();
  console.log("product", product);

  return {
    props: {
      product: product,
    },
  };
};

export default ProductPage;
