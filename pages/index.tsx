import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Products from "../src/components/Products";
import { Product } from "../types";

const Home: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <Grid container direction="column" sx={{ marginTop: 3 }}>
      <Products products={products} />
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

export default Home;
