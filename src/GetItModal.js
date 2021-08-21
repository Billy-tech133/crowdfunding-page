import { Check } from "@material-ui/icons";
import React from "react";
import { useGlobalContext } from "./context";
import "./GetItModal.css";
function GetItModal() {
  const { cardModal, closeCardModal } = useGlobalContext();
  return (
    <>
      {cardModal ? (
        <div className="app-shadow"></div>
      ) : (
        <div className="app-shadow hide-shadow"></div>
      )}
      {/* <div className={`${cardModal ? "app-shadow" : "hide-shadow"}`}></div> */}
      <div className={`${cardModal ? "card-modal show-card" : "card-modal"}`}>
        <button className="btn-check">
          <Check onClick={closeCardModal} />
        </button>
        <h3>Thanks for your support</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. you get an email once our campaign is
          completed
        </p>
        <button className="btn-got">Got it!</button>
      </div>
    </>
  );
}

export default GetItModal;
