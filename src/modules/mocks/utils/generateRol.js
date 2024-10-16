export const generateBoolean = () => {
  const number = Math.floor(Math.random() * 2) + 1;
  if (number === 1) return true;
  return false;
};
