import React from "react";

import "./styles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import DropdownProfile from "../DropdownProfile/DropdownProfile";

function DashboardHeader() {
  return (
    <div className="dashbord-header-container">
      <div className="dashbord-header-logo">
        <img src="https://bayubuanatravel.com/assets/images/logo.png" alt="" />
      </div>

      <div className="dashbord-header-right">
        <img
          src={NotificationIcon}
          alt="notification-icon"
          className="dashbord-header-icon"
        />
        <img
          src={SettingsIcon}
          alt="settings-icon"
          className="dashbord-header-icon"
        />
        <DropdownProfile />
      </div>
    </div>
  );
}

export default DashboardHeader;
