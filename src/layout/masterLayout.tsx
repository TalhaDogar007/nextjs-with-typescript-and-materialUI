import React from "react";
import { ReactNode } from "react-is/node_modules/@types/react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  master_layout_main_container: {
    minWidth: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column" 
  },
  master_layout_main_container_inner_box: {
    flex: "2" ,
  },
}));
const MasterLayout = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();

  return (
    <div className={classes.master_layout_main_container}>
      <Navbar />
      <div className={classes.master_layout_main_container_inner_box}>{children}</div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
