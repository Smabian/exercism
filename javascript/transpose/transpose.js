export const transpose = (inputArr) => {
  let maxSize = Math.max(0,...(inputArr.map(el => el.length)));
  let outputArr = new Array(maxSize).fill("");  
  //Transposing
  for (let row = 0; row < inputArr.length; ++row) {
    // Replace whitespaces with _ for improved trimming later on
    let temp = inputArr[row].replace(/ /g, "_").split('');
    for (let column = 0; column < maxSize; ++column)
      outputArr[column] = outputArr[column] + (temp[column] ?? " ");
  }
  //Trimming
  return outputArr.map(row => row.trimEnd().replace(/_/g, " "));
};