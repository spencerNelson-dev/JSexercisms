//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {

  if(number <= 0){
    throw("Only positive numbers are allowed")
  }
  
let steps = 0

while (number != 1){

  if (number % 2 == 0){

    steps++

    number /= 2
  } else {

    steps++

    number = (number * 3) + 1
  }

}

return steps

};


// If n is even, divide n by 2 to get n / 2. If n is
// odd, multiply n by 3 and add 1 to get 3n + 1.