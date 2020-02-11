//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(length1, length2, length3) {
    this.side1 = length1
    this.side2 = length2
    this.side3 = length3
  }

  isEquilateral() {
    
    let returnBool = false

    if(this.isTriangle()){

      // checks if all three sides are the same
      if(this.side1 == this.side2 &&
         this.side2 == this.side3){
        returnBool = true
      }
    }

    return returnBool
  }

  isIsosceles() {

    let returnBool = false

    if(this.isTriangle()){

      // Check to see if two sides are the same
      if(this.side1 == this.side2 ||
         this.side2 == this.side3 ||
          this.side1 == this.side3){
        returnBool = true
      }

    }

    return returnBool
  }

  isScalene() {

    let returnBool = false

    // Check if it is a triangle, and if it is not equilateral, and if it is not isIsosceles
    if(this.isTriangle() &&
     !this.isEquilateral() &&
     !this.isIsosceles()){
      returnBool = true
    }

    return returnBool
  }

  isTriangle() {

    let returnBool = true

    // check to see if the smallest side is less than or equal to zero
    if( Math.min(this.side1, this.side2, this.side3) <= 0) {
      returnBool = false
    }

    // check to see if two sides added is not >= the thrid side
    if (
      (this.side1 + this.side2) < this.side3 ||
      (this.side2 + this.side3) < this.side1 ||
      (this.side1 + this.side3) < this.side2
    ){
      returnBool = false
    }

    return returnBool

  }
}
