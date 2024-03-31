//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (inputArr) => {
  if (inputArr.length < 1) {return []};

  let maxSize = Math.max(...(inputArr.map(el => el.length)));
  let outputArr = new Array(maxSize).fill("");  

  //Transposing
  for (let row = 0; row < inputArr.length; row++) {
    // Replace whitespaces with _ for improved trimming later on
    let temp = inputArr[row].replace(/ /g, "_").split('');
    
    for (let column = 0; column < maxSize; column++) {
      outputArr[column] = outputArr[column] + temp[column];
      outputArr[column] = outputArr[column].replace(/undefined/g, " ")
    }
  }

  // Trimming
  for (let i = outputArr.length-1; i >= 0; i--) {
    if(outputArr[i].slice(-1) != " ") {
        
      //*** Replacing Whitespace placeholder / Alternative Solution would be helpful ***
        for (let j = 0; j < outputArr.length; j++){
          outputArr[j] = outputArr[j].replace(/_/g, " ");
        }

      return outputArr;
    } else {
      outputArr[i] = outputArr[i].trimEnd();
    }
  }
};