//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (inputPhrase) => {
  
  const ALPH = 'abcdefghijklmnopqrstuvwxyz'

  let isPan = true;

  // make the phrase lower case
  let phrase = inputPhrase.toLowerCase()

  // loop through the alphabet
  for(let index = 0; index < ALPH.length; index++){
    // if it is still possibly a pangram
    if(isPan){
      // if phrase.indexOf returns undefined then set isPan to false
      if(phrase.indexOf(ALPH[index]) == -1){
        isPan = false;
      }
    }
  } // End of loop

  return isPan

};
