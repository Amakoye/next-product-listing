import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "@mui/material/Link";

import { useSelector } from "react-redux";
import { State } from "../state";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const cart = useSelector((state: State) => state.cart.cart);

  return (
    <Box
      component="div"
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* logo */}
          <Box
            component="div"
            sx={{
              /* flexGrow: 1 */ display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <Link
                component={IconButton}
                href="/"
                size="large"
                color="secondary"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <LocalMallIcon sx={{ fontSize: 30 }} />
              </Link>
            </Box>
            {/* Links */}
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                  textDecoration: "none",
                }}
                component="a"
                href="/"
              >
                Home
              </Typography>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              >
                Brand
              </Typography>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              >
                Categories
              </Typography>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              >
                Men
              </Typography>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              >
                Women
              </Typography>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              >
                FAQ
              </Typography>
            </Box>
            {/* Button links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                disableRipple
                color="secondary"
                sx={{ marginRight: "10px" }}
              >
                Account
              </Button>
              <Link component={IconButton} href="/cart" color="secondary">
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingBasketIcon sx={{ fontSize: 30 }} />
                </Badge>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
