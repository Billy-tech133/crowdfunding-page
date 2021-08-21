import { Close } from "@material-ui/icons";
import React from "react";
import "./BackProjectModal.css";
import { useGlobalContext } from "./context";
function BackProjectModal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <>
      {isModalOpen ? (
        <div className="app-shadow"></div>
      ) : (
        <div className="app-shadow hide-shadow"></div>
      )}
      <div className={`${isModalOpen ? "project show" : "project"}`}>
        <div className="project-inner">
          <nav className="modal-nav">
            <h2>Back this project</h2>
            <div>
              <Close onClick={closeModal} />
            </div>
          </nav>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser in
            the world?
          </p>
          <div className="card">
            <div className="card-header">
              <button></button>
              <div>
                <h3>Pledge with no reward</h3>
              </div>
            </div>
            <p>
              {" "}
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          <div className="card">
            <div className="card-header">
              <button></button>
              <div>
                <h3>Bamboo Stand</h3>
                <h4> Pledge $25 or more</h4>
              </div>
            </div>
            <p>
              {" "}
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list. 101 left
            </p>
            <h2>
              64
              <span>left</span>
            </h2>
          </div>
          <div className="card">
            <div className="card-header">
              <button></button>
              <div>
                <h3> Black Edition Stand</h3>
                <h4> Pledge $75 or more</h4>
              </div>
            </div>
            <p>
              {" "}
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included. 64 left
            </p>
            <h2>
              64
              <span>left</span>
            </h2>
          </div>
          <div className="card">
            <div className="card-header">
              <button></button>
              <div>
                <h3> Mahogany Special Edition</h3>
                <h4> Pledge $200 or more</h4>
              </div>
            </div>
            <p>
              {" "}
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included. 0 left
            </p>
            <h2>
              64
              <span>left</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackProjectModal;
