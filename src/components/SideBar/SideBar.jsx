import React, { useState } from "react";
import classes from "./SideBar.module.css";
// import Logo from "../../assets/images/logo.png";

import { BiFootball } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { NavLink } from "react-router-dom";
import SettingsModal from "../Modals/SettingsModal";
import { FaRegHospital } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { MdOutlineBloodtype } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

const SideBar = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.singleItemContainer}>
        <FaRegHospital color={"#1d1d1f"} size={40} />
      </div>
      <div className={classes.multipleItemsContainer}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.iconContainer
          }
        >
          <AiOutlineHome className={classes.icon} />
        </NavLink>
        <NavLink
          to={"/donations"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.iconContainer
          }
        >
          <BiDonateBlood className={classes.icon} />
        </NavLink>
        <NavLink
          to={"/events"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.iconContainer
          }
        >
          <MdEvent className={classes.icon} />
        </NavLink>

        <NavLink
          to={"/bloodBank"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.iconContainer
          }
        >
          <MdOutlineBloodtype className={classes.icon} />
        </NavLink>

        <NavLink
          to={"/donors"}
          className={({ isActive }) =>
            isActive ? classes.active : classes.iconContainer
          }
        >
          <BsPeople className={classes.icon} />
        </NavLink>
      </div>
      <div className={classes.singleItemContainer}>
        <div
          onClick={() => setShowSettingsModal(true)}
          className={classes.iconContainer}
        >
          <FiSettings className={classes.icon} />
        </div>
      </div>
      {showSettingsModal && (
        <SettingsModal closeModal={() => setShowSettingsModal(false)} />
      )}
    </div>
  );
};

export default SideBar;
