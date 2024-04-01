//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const planets = {
 earth : {years:1, seconds:31557600},
 mercury : {years: 0.2408467},
 venus : {years:0.61519726},
 mars : {years:1.8808158},
 jupiter : {years:11.862615},
 saturn : {years:29.447498},
 uranus : {years:84.016846},
 neptune : {years:164.79132},
}

export const age = (planet, ageInSeconds) => {
  return parseFloat((ageInSeconds / planets["earth"].seconds / planets[planet].years).toFixed(2));
};
