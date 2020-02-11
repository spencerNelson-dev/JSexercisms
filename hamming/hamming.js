//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (leftDNA, rightDNA) => {

  if(leftDNA == "" && rightDNA){
    throw new Error('left strand must not be empty')
  }
  if(rightDNA == "" && leftDNA) {
    throw new Error('right strand must not be empty')
  }
  if(leftDNA.length != rightDNA.length){
    throw new Error('left and right strands must be of equal length');
  }

  let count = 0

  for(let index = 0; index < leftDNA.length; index++){
    if(leftDNA[index] != rightDNA[index] ){ count++}
  }
  return count
};
