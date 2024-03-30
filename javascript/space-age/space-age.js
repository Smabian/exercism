//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const earth = {planet:"earth", years:1, seconds:31557600};
const mercury = {planet:"mercury", years: 0.2408467};
const venus = {planet:"mercury", years:0.61519726};
const mars = {planet:"mars", years:1.8808158};
const jupiter = {planet:"jupiter", years:11.862615};
const saturn = {planet:"saturn", years:29.447498};
const uranus = {planet:"uranus", years:84.016846};
const neptune = {planet:"neptune", years:164.79132};

export const age = (planet, ageInSeconds) => {
  return parseFloat((ageInSeconds / earth.seconds / eval(planet).years).toFixed(2));
};
