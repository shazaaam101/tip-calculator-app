import { useEffect, useReducer } from "react";
import "./App.css";
import { TipContext } from "./TipContext";
import DataPanel from "./components/DataPanel";
import UserPanel from "./components/UserPanel";
import { INIT_STATE, reducer } from "./utils/reducer";
import { isEmpty } from "./utils/isEmpty";
import { checkError } from "./utils/checkError";

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  useEffect(() => {
    if (
      !isEmpty(state.input.bill, state.input.tip, state.input.numberOfPeople)
    ) {
      const _error = checkError(
        state.input.bill,
        state.input.tip,
        state.input.numberOfPeople
      );
      console.log(_error);
      dispatch({
        type: "ERROR",
        payload: _error,
      });
      if (Object.keys(_error).length !== 0) return;
      console.log("ASD");
      //Calculate tip amount per person and total per person
      const tipAmountPerPerson =
        ((state.input.bill / state.input.numberOfPeople) * state.input.tip) /
        100;
      const totalPerPerson =
        state.input.bill / state.input.numberOfPeople + tipAmountPerPerson;
      dispatch({
        type: "VALUE",
        payload: {
          tipAmountPerPerson: tipAmountPerPerson.toFixed(2),
          totalPerPerson: totalPerPerson.toFixed(2),
        },
      });
    }
    console.log("state change", state);
  }, [state.input.bill, state.input.tip, state.input.numberOfPeople]);
  console.log(state);
  return (
    <div className="App">
      <div className="container">
        <h1 className="brand">
          SPLI
          <br />
          TTER
        </h1>
        <div className="box">
          <div className="split-two-panel">
            <TipContext.Provider value={{ state, dispatch }}>
              <UserPanel />
              <DataPanel />
            </TipContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
