//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// import { search } from "core-js/fn/symbol";

export const findAnagrams = (word, searchArray) => {
  let sortedWord = word.toLowerCase().split('').sort().join('');
  let anagramList = [];

  for (let item in searchArray){
    if (word.length != searchArray[item].length) { continue; }
    if (word.toLowerCase() === searchArray[item].toLowerCase()) { continue; }

    let searchWord = searchArray[item].toLowerCase().split('').sort().join('');
    if (searchWord === sortedWord) { anagramList.push(searchArray[item])};
  };
  return anagramList;
};
