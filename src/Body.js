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
      <div className="body-countdown">
        <div className="price countdown">
          <h1>$89,914</h1>
          <p>of 100,000 backed</p>
        </div>
        <div className="backers countdown">
          <h1>5,007</h1>
          <p>total backers</p>
        </div>
        <div className="days countdown">
          <h1>56</h1>
          <p>days left</p>
          {/* <input type="range" color="hsl(176, 50%, 47%)" /> */}
        </div>
      </div>
      <div className="body-about">
        <div className="about-adjust">
          <h2>About this project</h2>
          <br />
          <p>
            {" "}
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <br />
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <div className="card about-firstCard">
            <div>
              <h3> Bamboo Stand</h3>
              <hr />
              <hr />
              <h4>Pledge $25 or more</h4>
              <br />
              <hr />
              <p>
                {" "}
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <h1>
                101
                <span>left</span>
              </h1>
              <br />
              <hr />
              <button className="btn reward">select reward</button>
            </div>
          </div>
          <div className="card about-secondCard">
            <div>
              <h3> Black Edition Stand</h3>
              <hr />
              <hr />
              <h4>Pledge $75 or more</h4>
              <br />
              <hr />
              <p>
                {" "}
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <h1>
                64
                <span>left</span>
              </h1>
              <br />
              <hr />
              <button className="btn reward">select reward</button>
            </div>
          </div>
          <div className="card about-thirdCard">
            <div>
              <h3> Mahogany Special Edition</h3>
              <hr />
              <hr />
              <h4>Pledge $200 or more</h4>
              <br />
              <hr />
              <p>
                {" "}
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <h1>
                0<span>left</span>
              </h1>
              <br />
              <hr />
              <button className="btn reward">Out of Stock</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
