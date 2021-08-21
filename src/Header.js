import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect } from "react";
import logo from "./images/logo.svg";
import "./Header.css";
import { Close } from "@material-ui/icons";
import { useGlobalContext } from "./context";

function Header() {
  const {
    isModalOpen,
    modal,
    openThisModal,
    closeThisModal,
    closeModalToggle,
  } = useGlobalContext();

  useEffect(() => {
    closeModalToggle();
  }, []);

  return (
    <>
      {/* {modal ? (
        <div className="app-shadow"></div>
      ) : (
        <div className="app-shadow hide-shadow"></div>
      )} */}
      <div className="header">
        <nav className="header-navbar">
          <img className="header-logo" src={logo} alt="" />
          <div className="header-icons">
            {!modal ? (
              <MenuIcon onClick={openThisModal} />
            ) : (
              <Close onClick={closeThisModal} />
            )}
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
        <div className={modal ? "header-menu show-modal" : "close-modal"}>
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
    </>
  );
}

export default Header;
