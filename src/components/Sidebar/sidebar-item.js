import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import "./menuDown.css";

const SideBarItem = ({ item, active }) => {
  const [isOpen, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
    setOpen(!isOpen);
  };
  return (
    <Link
      to={item.path}
      className={active ? "sidebar-item-active" : "sidebar-item"}
      onClick={onClick}
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="sidebar-item-icon"
      />
      <span className="sidebar-item-label">{item.title}</span>

      {item.icons ? (
        <img
          src={item.icons}
          alt="icon"
          className={`icon-right icon ${isOpen && "open"}`}
        />
      ) : (
        ""
      )}

      <div
        ref={dropdownRef}
        className={`menus ${isActive ? "actives" : "inactive"}`}
      >
        <ul>
          {item.subMenu
            ? item.subMenu.map((i, index) => {
                return (
                  <li
                    key={index + 1}
                    className={active ? "sidebar-list-active" : "sidebar-list"}
                    onClick={onClick}
                  >
                    <a href="/messages">{i.label}</a>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </Link>
  );
};

export default SideBarItem;
