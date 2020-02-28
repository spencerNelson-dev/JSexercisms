//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (inObj) => {

  // Get the keys of the passed-in object
  let keys = Object.keys(inObj)

  // initialize a new object
  let newObj = {}

  // loop through the keys of the object
  for (let index = 0; index < keys.length; index++) {

    // get the array that belongs to the key
    let arrayOfLetters = inObj[keys[index]]

    // loop through the array of characters
    for (let index2 = 0; index2 < arrayOfLetters.length; index2++) {

      // set the property of the new object to a character .toLowerCase()
      let prop = arrayOfLetters[index2].toLowerCase()

      // add a property (a character) to the value of the key
      newObj[prop] = Number(keys[index])

    }
  }

  return newObj

};
