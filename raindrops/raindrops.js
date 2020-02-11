//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  
    let output = ""

    if (number % 3 == 0) { output += "Pling"}

    if (number % 5 == 0) { output += "Plang"}

    if (number % 7 == 0) { output += "Plong"}

    if (output == "") { output += number}

    
  return output

};


/*
- If the number has 3 as a factor, output 'Pling'.
- If the number has 5 as a factor, output 'Plang'.
- If the number has 7 as a factor, output 'Plong'.
- If the number does not have 3, 5, or 7 as a factor,
  just pass the number's digits straight through.
*/