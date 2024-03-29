// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let number1 = Number(String(array1).replace(/,/g,""));
  let number2 = Number(String(array2).replace(/,/g,""));
  return number1 + number2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reverseNumber = "";
  for(let i=String(value).length;i>=0;i--){
    reverseNumber = reverseNumber + String(value).charAt(i);
  };

  if (Number(reverseNumber) === value) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Boolean(input) == false) {
    return "Required field"
  } else if (isNaN(Number(input))|| Number(input) == 0) {
    return "Must be a number besides 0"
  } else {
    return "";
  }
}