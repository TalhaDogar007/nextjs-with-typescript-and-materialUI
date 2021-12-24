import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import clsx from "clsx";
import useWindowSize from "../../hooks/useWindowSize";

const useStyles = makeStyles((theme) => ({
  navbar_items_main_container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbar_items: {
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
  navbar_items_login_signup_button: {
    backgroundColor: "red",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "white",
      "& a": {
        color: "black",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  mobile_navbar: {
    display: "flex",
    width: "180px",
    textAlign: "center",
    alignItems: "center",
    paddingBottom: "16px",
    backgroundColor: "black",
    borderRadius: "14px",
    position: "absolute",
    right: "0",
    top: "68px",
    marginRight: "26px",
    zIndex: "1",
  },
  mobile_navbar_show_button: {
    position: "absolute",
    right: "0",
  },
  mobile_navbar_search_field: {
    height: "43px",
    backgroundColor: "white",
    marginRight: "10px !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobile_navbar_search_field_show_on_mobile: {
    height: "43px",
    backgroundColor: "white",
    marginRight: "30px !important",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowSize();

  const openMobileNavbar = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  }, [width]);
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <FreeBreakfastIcon />
        </IconButton>
        <OutlinedInput
              className={classes.mobile_navbar_search_field_show_on_mobile}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          className={clsx(classes.navbar_items_main_container, {
            [classes.mobile_navbar]: isVisible,
            [""]: !isVisible,
          })}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
            padding={{ xs: "14px 0px", sm: "0" }}
          >
            <Typography variant="h6" className={classes.navbar_items}>
              <Link href="/">Home</Link>
            </Typography>
            <Typography variant="h6" className={classes.navbar_items}>
              <Link href="/about">About</Link>
            </Typography>
            <Typography variant="h6" className={classes.navbar_items}>
              <Link href="/contact">Contact</Link>
            </Typography>
            <OutlinedInput
              className={classes.mobile_navbar_search_field}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button className={classes.navbar_items_login_signup_button}>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button className={classes.navbar_items_login_signup_button}>
              <Link href="/auth/signup">Signup</Link>
            </Button>
          </Stack>
        </Stack>

        <IconButton
          size="large"
          color="inherit"
          sx={{ display: { xs: "flex", sm: "none" } }}
          className={classes.mobile_navbar_show_button}
          onClick={openMobileNavbar}
        >
          |||
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
