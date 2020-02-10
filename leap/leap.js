//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {

  let leap = false

  if (year % 4 == 0){

    leap = true

    if(year % 100 == 0){

      leap = false

      if(year % 400 == 0){

        leap = true

      } // End of divisible by 400
    } // End of divisible by 100
  } // End of divisible by 4

  return leap

};
