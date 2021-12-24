import React from "react";
import { Avatar, Container, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Icons from "../../assets/index";
const useStyles = makeStyles((theme) => ({
  home_page_main_container: {
    height: "500px",
    backgroundImage:
      "linear-gradient( 135deg, rgb(255, 48, 48) 0%, rgb(183, 24, 51) 100%)",
    marginTop: "48px",
    marginBottom: "48px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "16px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
      padding: "0px 0px 10px 0px",
    },
  },
  home_page_red_box: {
    height: "100%",
    width: "46%",
  },
  home_page_red_box_img: {
    height: "100%",
    width: "100%",
    position: "relative",
    animationName: `$home_page_rocket_animation`,
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  },
  home_page_red_box_text_container: {
    height: "100%",
    width: "46%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  home_page_red_inner_text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  home_page_red_box_button: {
    width: "180px",
    height: "70px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "16px",
    fontSize: "20px",
    marginTop: "15px",
  },
  home_page_contact_text_button_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "48px",
    textAlign: "center",
  },
  home_page_contact_text_button_container_inner_text: {
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  home_page_contact_text_button_container_middle_text: {
    margin: "24px 0px 40px",
    color: "rgb(99, 115, 129)",
  },
  home_page_contact_text_button: {
    backgroundImage:
      "linear-gradient( 135deg, rgb(255, 48, 48) 0%, rgb(183, 24, 51) 100%)",
    color: "white",
    width: "180px",
    height: "70px",
    borderRadius: "14px",
  },
  "@keyframes home_page_rocket_animation": {
    "0%": { top: "30px" },
    "100%": { top: "-30px" },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.home_page_main_container}>
        <Box className={classes.home_page_red_box}>
          <Avatar
            className={classes.home_page_red_box_img}
            variant="square"
            src={Icons["rocket.png"].default.src}
          ></Avatar>
        </Box>
        <Box className={classes.home_page_red_box_text_container}>
          <Typography className={classes.home_page_red_inner_text} variant="h2">
            Get started with
          </Typography>
          <Typography className={classes.home_page_red_inner_text} variant="h2">
            minimal kit today
          </Typography>
          <Button className={classes.home_page_red_box_button}>Search </Button>
        </Box>
      </Container>
      <Container className={classes.home_page_contact_text_button_container}>
        <Typography
          variant="h3"
          className={classes.home_page_contact_text_button_container_inner_text}
        >
          Still have questions?
        </Typography>
        <Typography
          variant="body1"
          className={
            classes.home_page_contact_text_button_container_middle_text
          }
        >
          Please describe your case to receive the most accurate advice.
        </Typography>
        <Button className={classes.home_page_contact_text_button}>
          Contact Us
        </Button>
      </Container>
    </div>
  );
};
export default Home;
