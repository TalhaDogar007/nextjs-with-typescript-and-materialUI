import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Icons from "../../src/assets/index";
import MasterLayout from "../../src/layout/masterLayout";

const useStyles = makeStyles((theme) => ({
  about_page_main_container: {
    width: "100%",
    height: "100%",
  },
  about_page_top_picture_container: {
    width: "100%",
    height: "600px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  about_page_top_picture: {
    width: "100%",
    height: "100%",
    marginTop: "3px",
  },
  about_page_top_picture_bottom_container: {
    padding: "30px 100px 50px 100px",
    backgroundColor: "#FBF0CA",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 16px 50px 16px",
    },
  },
  about_page_top_picture_bottom_container_main_text: {
    color: "#BD1C33",
    marginBottom: "30px",
  },
  about_page_top_picture_bottom_container_main_team_text: {
    color: "#BD1C33",
    marginBottom: "30px",
    marginTop: "30px",
  },
  about_page_profile_avatar_item_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  about_page_profile_avatar: {
    width: "150px",
    height: "150px",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px",
    },
  },
  about_page_profile_avatar_body_text: {
    wordBreak: "break-all",
  },
}));
const About = () => {
  const classes = useStyles();

  return (
    <MasterLayout>
      <Box className={classes.about_page_main_container}>
        <Box className={classes.about_page_top_picture_container}>
          <Avatar
            className={classes.about_page_top_picture}
            variant="square"
            src={Icons["aboutBackground.jpg"].default.src}
          ></Avatar>
        </Box>
        <Grid
          container
          className={classes.about_page_top_picture_bottom_container}
        >
          <Grid item xs={12}>
            <Typography
              variant={"h5"}
              className={
                classes.about_page_top_picture_bottom_container_main_text
              }
            >
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. kjkjn kklknmkjn.
            </Typography>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant={"body1"}>
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. kjkjn kklknmkjn.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant={"body1"}>
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. kjkjn kklknmkjn.
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Typography
              variant={"h5"}
              className={
                classes.about_page_top_picture_bottom_container_main_team_text
              }
            >
              Our Team
            </Typography>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              xs={6}
              md={6}
              lg={3}
              className={classes.about_page_profile_avatar_item_container}
            >
              <Avatar
                className={classes.about_page_profile_avatar}
                variant="circular"
                src={Icons["aboutProfileimg.jpg"].default.src}
              ></Avatar>
              <Typography variant={"h5"} sx={{ marginBottom: "10px" }}>
                Our Team
              </Typography>
              <Typography
                variant={"body1"}
                className={classes.about_page_profile_avatar_body_text}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              lg={3}
              className={classes.about_page_profile_avatar_item_container}
            >
              <Avatar
                className={classes.about_page_profile_avatar}
                variant="circular"
                src={Icons["bradProfileimg.png"].default.src}
              ></Avatar>
              <Typography variant={"h5"} sx={{ marginBottom: "10px" }}>
                Our Team
              </Typography>
              <Typography
                className={classes.about_page_profile_avatar_body_text}
                variant={"body1"}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              lg={3}
              className={classes.about_page_profile_avatar_item_container}
            >
              <Avatar
                className={classes.about_page_profile_avatar}
                variant="circular"
                src={Icons["HaydenProfileimg.png"].default.src}
              ></Avatar>
              <Typography variant={"h5"} sx={{ marginBottom: "10px" }}>
                Our Team
              </Typography>
              <Typography
                className={classes.about_page_profile_avatar_body_text}
                variant={"body1"}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              lg={3}
              className={classes.about_page_profile_avatar_item_container}
            >
              <Avatar
                className={classes.about_page_profile_avatar}
                variant="circular"
                src={Icons["mikeProfileimg.png"].default.src}
              ></Avatar>
              <Typography variant={"h5"} sx={{ marginBottom: "10px" }}>
                Our Team
              </Typography>
              <Typography
                className={classes.about_page_profile_avatar_body_text}
                variant={"body1"}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MasterLayout>
  );
};
export default About;
