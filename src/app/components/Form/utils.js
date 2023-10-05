export const validateString = (value, maxLenght) => {
  if (!value || typeof value !== "string" || value.length > maxLenght) {
    return false;
  }
  return true;
};
