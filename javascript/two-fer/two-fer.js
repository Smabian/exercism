//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  name === undefined ? name = "you" : name;
  return "One for " + name + ", one for me.";
};

/*Better:

export const twoFer = (name = "you") => {
  return "One for " + name + ", one for me.";
};

*/
