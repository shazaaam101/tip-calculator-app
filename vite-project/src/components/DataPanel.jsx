import React, { useContext } from "react";
import { TipContext } from "../TipContext";

const DataPanel = () => {
  const { state, dispatch } = useContext(TipContext);
  const handleReset = () => {
    dispatch({ type: "RESET" });
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    document
      .querySelectorAll(".tip-btn")
      .forEach((input) => input.classList.remove("selected"));
  };
  return (
    <div className="DataPanel">
      <div className="group">
        <div className="text">
          Tip Amount <br />
          <span className="pale">/ person</span>
        </div>
        <div className="value">${state.value.tipAmountPerPerson || "0.00"}</div>
      </div>
      <div className="group">
        <div className="text">
          Tip Amount <br />
          <span className="pale">/ person</span>
        </div>
        <div className="value">${state.value.totalPerPerson || "0.00"}</div>
      </div>
      <button className="reset-btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default DataPanel;
