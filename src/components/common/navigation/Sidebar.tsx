import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import App from "../../../App";
import { NavLink, Link , useLocation} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AppLogo from './../../../assets/scad.svg';
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";


const SideBar = () => {
  let location = useLocation();
  const [menuCollapse, setMenuCollapse] = useState(true);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (

    <div id="sidebar">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>

          {menuCollapse ?

          <img src={AppLogo} alt="React Logo" className="animate-text-left" width={60} height={70} onClick={menuIconClick} style={{marginLeft:"10px"}}/>:
          <img src={AppLogo} alt="React Logo" className="animate-text-right" width={100} height={70} onClick={menuIconClick} style={{marginLeft:"10px"}}/>
        }

          {/* <div className="logotext">
            <Menu iconShape="square">
              <MenuItem icon={<MenuIcon />} onClick={menuIconClick}>
                SCAD Menu
              </MenuItem>
            </Menu>
          </div> */}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">

            <MenuItem icon={<HomeIcon />} active={location.pathname === "/dashboard"}>

              Home <Link to="/dashboard" />
            </MenuItem>
            <MenuItem icon={<CalendarMonthIcon />} active={location.pathname === "/schedule"}>
              Schedule <Link to="/schedule" />
            </MenuItem>
            <MenuItem icon={<NotificationsIcon />} active={location.pathname === "/notification"}>
              Notification <Link to="/notification" />
            </MenuItem>
            <MenuItem icon={<AccountBoxIcon />} active={location.pathname === "/profile"}>
              Profile <Link to="/profile" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<LogoutIcon />} >
              Logout <Link to="/" />
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
      ;
    </div>
  );
};
export default SideBar;
