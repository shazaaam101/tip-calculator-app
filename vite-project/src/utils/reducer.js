export const INIT_STATE = {
  input: { bill: null, tip: null, numberOfPeople: null },
  value: { tipAmountPerPerson: null, totalPerPerson: null },
  error: { bill: "", tip: "", numberOfPeople: "" },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "BILL":
      return {
        ...state,
        input: { ...state.input, bill: action.payload },
      };
    case "TIP":
      return {
        ...state,
        input: { ...state.input, tip: action.payload },
      };
    case "PEOPLE":
      return {
        ...state,
        input: { ...state.input, numberOfPeople: action.payload },
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "RESET":
      return INIT_STATE;
  }
};
