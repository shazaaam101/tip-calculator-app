import { isNumber } from "./isNumber";

export const checkError = (bill, tip, numberOfPeople) => {
  let error = {};
  if (bill && !isNumber(bill)) {
    console.log("HELOO");
    error = { ...error, bill: "Invalid input" };
  }
  if (tip && !isNumber(tip)) {
    error = { ...error, tip: "Invalid input" };
  }
  if (numberOfPeople) {
    if (numberOfPeople === 0) {
      error = { ...error, people: "Can't be zero" };
    } else if (!isNumber(numberOfPeople)) {
      error = { ...error, people: "Invalid input" };
    }
  }

  return error;
};
