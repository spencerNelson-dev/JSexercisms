//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {

  let output = []

  if(number != 1){

    let factor = 2;

    while (number > 1){

      while( number % factor == 0){

        output.push(factor)

        number = number / factor 
      }
      factor++
    }

  }

  return output
  
};
