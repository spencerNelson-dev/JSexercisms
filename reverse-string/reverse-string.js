//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const reverseString = (normalString) => {

  // split our normal String into an aray, each element is a char of the string
  let arrayString = normalString.split("")

  // going through each element of the array, value = an element of an array; result is the string we are building
  return arrayString.reduce((result, value) => {

    // here we are concatinating the value to the beginning of the result string and returning the string
    return value + result

  }, "") // <-- This double quote is the initial value of result
};

//console.log(reverseString("This is a test"))

/* For loop method
  let reverse = ""

    for( let index = normalString.length - 1; index >= 0; index--){
      
      reverse += normalString.charAt(index)
    }

  return reverse
*/

Array.reduce()