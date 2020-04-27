//
// An [Armstrong number](https://en.wikipedia.org/wiki/Narcissistic_number) 
// is a number that is the sum of its own digits each raised to the power 
// of the number of digits.
//

const seperateDigits = (number) => {

  let digits = []

  if (number > 0) {

    // while number is greater than 0
    while (number) {

      digits.unshift(number % 10);
      number = Math.floor(number / 10);
    }

  } else {

    digits.push(0)
  }

  return digits
}

export const isArmstrongNumber = (number) => {

  let isArmstrong = false

  // seperate our number into an array of digits
  let digits = seperateDigits(number)

  let numberOfDigits = digits.length

  let powerSum = digits.reduce((powerSum, value) => {

    return powerSum + value**numberOfDigits
  }, 0)

  if (powerSum == number){
    isArmstrong = true
  }

  return isArmstrong

};
