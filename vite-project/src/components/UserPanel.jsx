import React, { useContext } from "react";
import InputField from "./InputField";
import { TipContext } from "../TipContext";

const UserPanel = () => {
  const { state, dispatch } = useContext(TipContext);
  const listTips = [5, 10, 15, 25, 50];

  const handleSelectTip = (e) => {
    const tips = document.querySelectorAll(".tip-btn");
    dispatch({ type: "TIP", payload: e.value });
    console.log(e.value);
    tips.forEach((tip) => {
      if (e.value === tip.value) {
        tip.classList.add("selected");
      } else {
        tip.classList.remove("selected");
      }
      console.log(tip);
    });
  };

  return (
    <div className="UserPanel">
      <InputField logo="bill" name="Bill" />
      <div className="select-tips">
        <p>
          Select Tip %&emsp;
          {state.error.tip && <span className="error">{state.error.tip}</span>}
        </p>

        <div className="grid">
          {listTips.map((tip, idx) => (
            <button
              key={idx}
              className="tip-btn"
              value={tip}
              onClick={(e) => handleSelectTip(e.target)}
            >
              {tip}%
            </button>
          ))}

          <input
            className="tip-btn"
            type="number"
            placeholder="Custom"
            min="0"
            onKeyUp={(e) => handleSelectTip(e.target)}
          />
        </div>
      </div>

      <InputField logo="people" name="Number of People" />
    </div>
  );
};

export default UserPanel;
