//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const rows = (numOfRows) => {

  let output = []

  if (numOfRows > 0){
    output = [[]]

    // loop through according to the number of rows you want
    for(let index = 0; index < numOfRows ; index++){
      let newArr = []

      // begin building the (index + 1)th row because the 0th row is empty
      // the (index + 1)th row will have index + 1 elements
      for (let newRow = 0; newRow < index + 1; newRow++){

        // Each element is built by elemnts in the previous row
        // the elements are at the same position and the leading position
        // of the element we are calculating
        newArr.push(output[index][newRow - 1] + output[index][newRow])

      }

      // Change all NaN values to 1
      for(let i =0; i < newArr.length; i++){
        if(!newArr[i]){ newArr[i] = 1}
      }
      // add the new row
      output.push(newArr)

    }
    //Remove 1st array which is empty
    output.shift()
  }

  return output

};