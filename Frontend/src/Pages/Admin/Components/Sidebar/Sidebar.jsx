import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="aSidebar">
      <div className="atop">
        <span className="alogo">J C ADMIN</span>
      </div>
      <hr />
      <div className="acenter">
        <ul>
          <p className="atitle">MAIN</p>
          <li>
            <DashboardIcon className="aicon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleAltIcon className="aicon" />
            <span>Users</span>
          </li>
          <li>
            <AddShoppingCartIcon className="aicon"></AddShoppingCartIcon>
           <Link to="/admin">
           <span>Orders</span></Link>
          </li>
          <li>
            <LocalShippingIcon className="aicon" />
           <Link to={"/admin/products"}>
           <span>Products</span>
           </Link>
          </li>
          <p className="atitle">USEFUL</p>
          <li>
            <QueryStatsIcon className="aicon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="aicon" />
            <span>Notifications</span>
          </li>
          <p className="atitle">SERVICE</p>
          <li>
            <SystemUpdateAltIcon className="aicon" />
            <span>System Health</span>
          </li>
          <li>
            <VpnKeyIcon className="aicon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="aicon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="abottom">
        <div className="acolorOption"></div>
        <div className="acolorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
