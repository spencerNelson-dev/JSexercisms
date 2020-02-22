//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.n = number
  }

  get sumOfSquares() {
    
    return (this.n * (this.n + 1) * (2*this.n + 1) ) / 6
    
  }

  get squareOfSum() {
    
    let sum = this.n * (this.n + 1) / 2

    return sum**2

  }

  get difference() {
    
    return this.squareOfSum - this.sumOfSquares
  }
}
