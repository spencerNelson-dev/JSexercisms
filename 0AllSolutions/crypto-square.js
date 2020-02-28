//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export class Crypto {
  constructor(passedString) {
    this.normalString = passedString
  }

  normalizePlaintext() {
    // create a regular expression to remove all punctuation and spaces
    let regularExpresson = /[\s#$%^&!,.]/

    // lowercase
    this.normalString = this.normalString.toLowerCase()

    let normalArray = this.normalString.split(regularExpresson)

    return normalArray.join('')

  }

  size() {

    let cryptoLength = this.normalizePlaintext().length

    // col denotes how many columns the rectangle will have
    let col = 0

    // Starting at two and incrementing by one we are looking for
    // a row number that fits our criteria of c -r <= 1 and
    // c >= r
    for ( let rows = 2; rows < cryptoLength; rows++){

      col = Math.round(cryptoLength / rows)

      if(col >= rows && col - rows <= 1) {break}

    }
    
    return col
  }

  plaintextSegments() {
    
    let segments = []

    let text = this.normalizePlaintext()

    let cryptoLength = this.normalizePlaintext().length

    let segmentLength = this.size()

    let maxSlices = Math.floor(cryptoLength / segmentLength) + 1

    // Loop over the string and slice the string in chuncks that
    // are the number of columns in length and push them to the array
    for(let slices = 0; slices < maxSlices  ; slices++){

      if(text.slice((slices * segmentLength),(segmentLength *(slices + 1))) != ''){

        segments.push(text.slice((slices * segmentLength),(segmentLength *(slices + 1))))
      } 
    }

    return segments
  }

  ciphertext() {
    
    let cipherString = ''

    let segments = this.plaintextSegments()

    let wordLength = this.size()

    // loop through the array and build our cipher by picking the
    // characters in each column according to the index. For example
    // all the 0th elements of our strings our our 0th column.
    for (let char = 0; char < wordLength; char++){

      for(let segment = 0; segment < this.plaintextSegments().length; segment++){

        if(segments[segment][char] != undefined){

          cipherString += segments[segment][char]
        }
      }
    }

    return cipherString
  }
}