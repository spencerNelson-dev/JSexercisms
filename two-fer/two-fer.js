//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  
  let output = ""

  if(name != undefined){
    output = `One for ${name}, one for me.`
  }else{
    output = "One for you, one for me."
  }

  return output
};
