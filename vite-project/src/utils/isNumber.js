export const isNumber = (input) => {
  const numberRegex = /^\d+(\.\d+)?$/;
  return numberRegex.test(input);
};
