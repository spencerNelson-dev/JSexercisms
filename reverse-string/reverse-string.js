//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (normalString) => {

  let reverse = ""

    for( let index = normalString.length - 1; index >= 0; index--){
      
      reverse += normalString.charAt(index)
    }

  return reverse
};
