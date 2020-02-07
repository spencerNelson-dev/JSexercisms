import { maxHeaderSize } from "http";

//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(enteredString) {
    this.matrixString = enteredString
  }

  get rows() {
    //split the given string by the newline char
    let splitString = this.matrixString.split('\n')

    // initialize row array
    let row = []

    // loop through the splitString array
    for(let index = 0; index < splitString.length; index++){

      //split each string in the splitString array into individual elements
      let newString = splitString[index].split(" ")

      //Loop through the newString and change the elements to numbers
      for(let element = 0; element < newString.length; element++){
        newString[element] = Number(newString[element])
      }

      // Add the newString array to the row array
      row.push(newString)

    } // End of loop through splitString

    return row
  }

  get columns() {

    // use the row array we get from rows()
    let rowArray = this.rows
    //initialize columns array this is what we will return
    let columns = []

    //set the dimentions of the array
    let numOfRows = rowArray.length
    let numOfColums = rowArray[0].length

    // loop each element in a row
    for( let inner = 0; inner < numOfColums; inner++){

      let column = []

      // loop each row
      for(let outer = 0; outer < numOfRows; outer++){

        column[outer] = rowArray[outer][inner]

      }

      columns[inner] = column

    }

    return columns

  }
} // End of Class