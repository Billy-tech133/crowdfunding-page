import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import logo from "./images/logo.svg";
import "./Header.css";
import { Close } from "@material-ui/icons";

function Header() {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="header">
      <nav className="header-navbar">
        <img className="header-logo" src={logo} alt="" />
        <div className="header-icons">
          <MenuIcon onClick={toggleModal} />
          {/* <Close className={show ? "show-modal" : "close-modal"} /> */}
        </div>
        <ul className="header-navLinks">
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">discover</a>
          </li>
          <li>
            <a href="#">get started</a>
          </li>
        </ul>
      </nav>
      <div className={show ? "header-menu show-modal" : "close-modal"}>
        <ul>
          <li>
            <a href="#">about</a>{" "}
          </li>
          <li>
            <a href="#">discover</a>
          </li>
          <li>
            <a href="#">get started</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
