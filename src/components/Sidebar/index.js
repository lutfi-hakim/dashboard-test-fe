import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SideBarItem from "./sidebar-item";

import "./styles.css";

import LogoutIcon from "../../assets/icons/logout.svg";

function SideBar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  const [state, setState] = useState({
    sidebarClass: "",
  });
  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  const onHandleMouseOver = () => {
    setState((pre) => ({
      ...pre,
      sidebarClass: "expende",
    }));
  };
  const onHandleMouseLeave = () => {
    setState((pre) => ({
      ...pre,
      sidebarClass: "collapsee",
    }));
  };

  return (
    <nav
      className={`sidebar ${state.sidebarClass}`}
      onMouseOver={onHandleMouseOver}
      onMouseLeave={onHandleMouseLeave}
    >
      {/* <div className="sidebar-container"> */}
      {/* <div className="sidebar-logo-container">
          <img src={logo} alt="logo" />
        </div> */}

      <div className="sidebar-container">
        <div className="sidebar-items">
          {menu.map((item, index) => (
            <div key={index} onClick={() => __navigate(item.id)}>
              <SideBarItem active={item.id === active} item={item} />
            </div>
          ))}
        </div>

        {/* <div className="sidebar-footer">
            <span className="sidebar-item-label">Logout</span>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
            />
          </div> */}
      </div>
      {/* </div> */}
    </nav>
  );
}

export default SideBar;
