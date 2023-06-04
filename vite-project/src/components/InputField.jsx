import React, { useContext, useState } from "react";
import { TipContext } from "../TipContext";

const InputField = ({ logo, name }) => {
  const [error, setError] = useState(false);
  const { dispatch } = useContext(TipContext);
  const handleInput = (e) => {
    dispatch({ type: logo.toUpperCase(), payload: e.target.value });
  };
  return (
    <div className={`InputField ${logo}`}>
      <div className="inform">
        <label htmlFor={name}>{name}</label>
        {error && <div className="error">Can't be zero</div>}
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
