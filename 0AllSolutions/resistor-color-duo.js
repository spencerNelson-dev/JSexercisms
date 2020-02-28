//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arrayOfColors) => {
  // Define our colors
  const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

  //Initalize our output
  let output = ""

  // Add the color indexes as strings
  output += COLORS.indexOf(arrayOfColors[0])

  output += COLORS.indexOf(arrayOfColors[1])

  // Change the string to a number
  output = Number(output)

  return output
};
