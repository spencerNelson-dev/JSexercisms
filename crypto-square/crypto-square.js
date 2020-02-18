//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export class Crypto {
  constructor(passedString) {
    this.normalString = passedString
  }

  normalizePlaintext() {
    let regularExpresson = /[\s#$%^&!,.]/

    // lowercase
    this.normalString = this.normalString.toLowerCase()

    let normalArray = this.normalString.split(regularExpresson)

    return normalArray.join('')

  }

  size() {

    let cryptoLength = this.normalizePlaintext().length

    let col = 0

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

    let cryptoLength = this.normalizePlaintext().length

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

  // const crypto = new Crypto('We all know interspecies romance is weird.')

  // console.log(crypto.normalizePlaintext())
  // console.log(crypto.plaintextSegments())
  // console.log(crypto.ciphertext())