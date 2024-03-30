//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
  let arr = [];
  if (arr.length === 0 && rows > 0) {arr.push([1])}; //set initial row
  
  for (let row=1; row<rows; row++) {
    const currentRow = [1]; // start each row with 1

    //iterate through the inner columns
    for (let col = 1; col < row; col++){
      const previousRow = arr[row-1];
      const newValue = previousRow[col] + previousRow[col - 1];
      currentRow.push(newValue);
    }

    currentRow.push(1); // End each row with 1

    arr.push(currentRow); // Add row to triangle
  }
  return arr;
};