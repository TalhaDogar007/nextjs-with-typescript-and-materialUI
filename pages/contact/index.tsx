import React from "react";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import Icons from "../../src/assets/index";
import MasterLayout from "../../src/layout/masterLayout";

const useStyles = makeStyles((theme) => ({
  contact_page_main_container: {
    padding: "72px 160px",
    [theme.breakpoints.down("lg")]: {
      padding: "72px 16px",
    },
  },
  contact_page_main_heading: {
    marginBottom: "30px",
  },
  contact_page_main_text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  contact_page_radio_button: {
    color: "red",
    "&.Mui-checked": {
      color: "red",
    },
  },
  contact_page_send_button: {
    backgroundImage:
      "linear-gradient( 135deg, rgb(255, 48, 48) 0%, rgb(183, 24, 51) 100%)",
    color: "white",
    width: "180px",
    height: "70px",
    borderRadius: "14px",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
  contact_page_support_team_container: {
    padding: "0px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px",
    },
  },
  contact_page_support_team_inner_container: {
    backgroundImage:
      "linear-gradient( 135deg, rgb(255, 48, 48) 0%, rgb(183, 24, 51) 100%)",
    color: "white",
    textAlign: "center",
    padding: "20px 20px",
  },
  contact_page_support_team_main_heading: {
    fontWeight: "600",
  },
  contact_page_support_team_profile_img_main_container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  contact_page_support_team_profile_img_container: {
    width: "100px",
    height: "100px",
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <MasterLayout>
      <Grid container className={classes.contact_page_main_container}>
        <Grid item xs={12} className={classes.contact_page_main_heading}>
          <Typography variant={"h2"} className={classes.contact_page_main_text}>
            Please get in touch and our expert support team will answer all your
            questions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={2} direction="column">
            <Stack>
              <TextField label="Full name *" id="outlined-start-adornment" />
            </Stack>
            <Stack>
              <TextField label="Email *" id="outlined-start-adornment" />
            </Stack>
            <Stack>
              <TextField label="Company *" id="outlined-start-adornment" />
            </Stack>
            <Stack>
              <FormControl component="fieldset">
                <FormLabel>Are you an existing customer? *</FormLabel>
                <RadioGroup row name="radio-buttons-group">
                  <FormControlLabel
                    value="true"
                    control={
                      <Radio className={classes.contact_page_radio_button} />
                    }
                    label="yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={
                      <Radio className={classes.contact_page_radio_button} />
                    }
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            <Stack>
              <TextField
                id="outlined-multiline-static"
                label="Your message *"
                multiline
                rows={8}
              />
            </Stack>
            <Stack sx={{ alignItems: "center" }}>
              <Button className={classes.contact_page_send_button}>
                <Link href="/">Send</Link>
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className={classes.contact_page_support_team_container}
        >
          <Stack
            spacing={2}
            direction="column"
            className={classes.contact_page_support_team_inner_container}
          >
            <Stack spacing={5}>
              <Typography
                variant={"h4"}
                className={classes.contact_page_support_team_main_heading}
              >
                Meet our brilliant and knowledgeable support team
              </Typography>
              <Typography variant={"body1"}>
                Live Support is available Mon-Fri 5am-7pm ET / 10am-Midnight GMT{" "}
              </Typography>
            </Stack>
            <Divider color={"white"}></Divider>
            <Stack
              direction="row"
              className={
                classes.contact_page_support_team_profile_img_main_container
              }
            >
              <Avatar
                variant="circular"
                src={Icons["HaydenProfileimg.png"].default.src}
                className={
                  classes.contact_page_support_team_profile_img_container
                }
              ></Avatar>
              <Avatar
                variant="circular"
                src={Icons["mikeProfileimg.png"].default.src}
                className={
                  classes.contact_page_support_team_profile_img_container
                }
              ></Avatar>
              <Avatar
                variant="circular"
                src={Icons["bradProfileimg.png"].default.src}
                className={
                  classes.contact_page_support_team_profile_img_container
                }
              ></Avatar>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </MasterLayout>
  );
};

export default ContactUs;
