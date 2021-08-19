import { Bookmark } from "@material-ui/icons";
import React from "react";
import "./Body.css";
import mastercraft from "./images/logo-mastercraft.svg";
function Body() {
  return (
    <div className="body">
      <div className="body-bamboo">
        <img className="body-mastercraft" src={mastercraft} alt="" />
        <h2>mastercraft bamboo monitor riser</h2>
        <p>A beautifully handcrafted monitor to reduce neck and eye strain</p>
        <div className="button-container">
          <button className="btn-back">Back this project</button>
          <button className="btn-bookmark">
            <Bookmark />
          </button>
        </div>
      </div>
      <div className="body-countdown"></div>
      <div className="body-about"></div>
    </div>
  );
}

export default Body;
