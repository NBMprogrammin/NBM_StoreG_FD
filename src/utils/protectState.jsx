export const protectState = (setStateFunction, stateName) => {
  return (newValue) => {
    const stack = new Error().stack;
    if (stack && stack.includes('at eval')) {
      console.warn(`🚫 ${stateName} modification blocked`);
      return;
    }
    setStateFunction(newValue);
  };
};