import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import Icons from "../../src/assets/index";


const useStyles = makeStyles((theme) => ({
  login_page_main_container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  login_page_left_img_container: {
    width: "40vw",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  login_page_left_img_avatar: {
    width: "100%",
    height: "100%",
  },
  login_page_right_inputs_container: {
    width: "60vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  login_page_right_inputs_group_box: {
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "16px",
    },
  },
  login_page_right_signin_img_container: {
    alignItems: "center",
  },
  login_page_right_signin_user_img: {
    backgroundImage:
      "linear-gradient( 135deg, rgb(255, 48, 48) 0%, rgb(183, 24, 51) 100%)",
    marginBottom: "10px",
  },
  login_page_right_signin_button: {
    backgroundImage:
      "linear-gradient( 135deg, rgb(255, 48, 48) 0%, rgb(183, 24, 51) 100%)",
    color: "white",
    width: "120px",
    height: "50",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (value: string) => {
    setValues({ ...values, password: value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <Box className={classes.login_page_main_container}>
      <Box className={classes.login_page_left_img_container}>
        <Avatar
          className={classes.login_page_left_img_avatar}
          variant="square"
          src={Icons["loginBackground.png"].default.src}
        ></Avatar>
      </Box>
      <Box className={classes.login_page_right_inputs_container}>
        <Stack
          spacing={2}
          direction="column"
          className={classes.login_page_right_inputs_group_box}
        >
          <Stack className={classes.login_page_right_signin_img_container}>
            <Avatar className={classes.login_page_right_signin_user_img}>
              <LockOutlined />
            </Avatar>
            <Typography variant="h4" sx={{ marginBottom: "10px" }}>
              Sign up
            </Typography>
          </Stack>
          <Stack spacing={2} direction="row">
            <TextField label="First Name" id="outlined-start-adornment" sx={{width: "100%"}}/>
            <TextField label="Last Name" id="outlined-start-adornment" sx={{width: "100%"}}/>
          </Stack>
          <Stack>
            <TextField label="Email Address *" id="outlined-start-adornment" />
          </Stack>
          <Stack>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>
          <Stack>
            <FormControlLabel
              control={<Checkbox />}
              label="Do you want to remember your password?"
            />
          </Stack>
          <Stack sx={{ alignItems: "center" }}>
            <Button className={classes.login_page_right_signin_button}>
              <Link href="/">Sign up</Link>
            </Button>
          </Stack>
          <Stack sx={{alignItems: "flex-end"}}>
          <Link href="/">Forget password?</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default Signup;
