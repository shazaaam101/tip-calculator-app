import React, { useContext } from "react";
import { TipContext } from "../TipContext";

const InputField = ({ logo, name }) => {
  const { state, dispatch } = useContext(TipContext);
  const handleInput = (e) => {
    dispatch({ type: logo.toUpperCase(), payload: e.target.value });
  };
  return (
    <div className={`InputField ${logo}`}>
      <div className="inform">
        <label htmlFor={name}>{name}</label>
        {state.error[logo] && <div className="error">{state.error[logo]}</div>}
      </div>

      <input
        id={name}
        className="full-width"
        type="number"
        placeholder="0"
        onKeyUp={(e) => handleInput(e)}
      />
    </div>
  );
};

export default InputField;
