//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  var raindrop = "";
  raindrop += (number % 3 === 0 ? "Pling" : "");
  raindrop += (number % 5 === 0 ? "Plang" : "");
  raindrop += (number % 7 === 0 ? "Plong" : "");
  return raindrop += (raindrop === "" ? number : "");
};