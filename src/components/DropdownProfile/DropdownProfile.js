import React, { useRef } from "react";
import { useState } from "react";

import LogoutIcon from "../../assets/icons/logout.svg";
import IconUser from "../../assets/icons/user.svg";
import IconPass from "../../assets/icons/settings.svg";

import "./index.css";

const DropdownProfile = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <img
          //   src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
          src="https://reqres.in/img/faces/9-image.jpg"
          alt="User avatar"
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <div className="pro">
          <span>
            <img
              //   src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              src="https://reqres.in/img/faces/9-image.jpg"
              alt="User avatar"
            />
          </span>
          <span>
            <h5>Patrik</h5>
            <h6>Admin</h6>
          </span>
        </div>
        <ul>
          <li>
            <img className="icon-dropp" src={IconUser} alt="icon" />
            <a href="/messages">My Profile</a>
          </li>
          <li>
            <img className="icon-dropp" src={IconPass} alt="icon" />
            <a href="/trips">Change Password</a>
          </li>
          <li>
            <img className="icon-dropp" src={LogoutIcon} alt="icon" />
            <a href="/saved">Sign Out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default DropdownProfile;
