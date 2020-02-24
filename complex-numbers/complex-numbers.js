//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imaginary) {
    this._real = real
    this._imaginary = imaginary


  }

  get real() {
    
    return this._real
  }

  get imag() {
    
    return this._imaginary
  }

  add(complex) {
    
    let real = this.real + complex.real

    let imaginary = this.imag + complex.imag
    

    return new ComplexNumber(real, imaginary)

  }

  sub(complex) {
    
    let real = this.real - complex.real

    let imaginary = this.imag - complex.imag

    return new ComplexNumber(real, imaginary)
  }

  div(complex) { //(a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i`

    let dividend = (complex.real**2 + complex.imag**2)
    
    let real = (this.real * complex.real + this.imag * complex.imag) / dividend

    let imaginary = (this.imag * complex.real - this.real * complex.imag) / dividend

    return new ComplexNumber(real, imaginary)          
  }

  mul(complex) { // `(a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i`
    
    let real = this.real * complex.real - this.imag * complex.imag

    let imaginary = this.imag * complex.real + this.real * complex.imag

    return new ComplexNumber(real, imaginary)
  }

  get abs() { // |z| = sqrt(a^2 + b^2)
    
    return Math.sqrt(this.real**2 + this.imag**2)
  }

  get conj() { // The conjugate of the number `a + b * i` is the number `a - b * i`.

    let conjImag = -this.imag

    // check for -0 and change to 0
    if (conjImag == -0) {conjImag = 0} 
    
    return new ComplexNumber(this.real, conjImag)
  }

  /*Raising e to a complex exponent can be expressed as `e^(a + i * b) = e^a * e^(i * b)`,
   the last term of which is given by Euler's formula `e^(i * b) = cos(b) + i * sin(b)`. */
  get exp() {

    let real = Math.exp(this.real) * Math.cos(this.imag)

    let imaginary = Math.exp(this.real) * Math.sin(this.imag)

    return new ComplexNumber(real, imaginary)
  }
}
