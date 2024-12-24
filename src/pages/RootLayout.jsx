import React from "react";
import SideBar from "../components/SideBar/SideBar";
import classes from "./RootLayout.module.css";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className={classes.container}>
      <div className={classes.sideBar}>
        <SideBar />
      </div>
      <div className={classes.screen}>
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
