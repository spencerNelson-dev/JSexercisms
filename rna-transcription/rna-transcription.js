//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaString) => {

   let output = ""

  for(let index = 0; index < dnaString.length; index++){

    let dnaChar = dnaString.charAt(index)

    if (dnaChar == 'G') {
      output += 'C'
    } else if (dnaChar == 'C'){
      output += 'G'
    } else if (dnaChar == 'T') {
      output += 'A'
    } else if (dnaChar == 'A'){
      output += 'U'
    }
  }

  return output
};

/*
* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
 */
