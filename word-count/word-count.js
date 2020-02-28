//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export const countWords = (inputString) => {

  let regEx = /[\s,\n:!@#$%^&*.]|'(?!t)/
  //let regEx = /\s'|'\s/

  let arrayString = inputString.split(regEx)

  return arrayString.reduce( (result, value) =>{

    if(result.hasOwnProperty(value.toLowerCase()) && value != ''){
      result[value.toLowerCase()] += 1
    } else if (value != '') {
      result[value.toLowerCase()] = 1
    }
    return result
  },{})
  
};

//console.log(countWords("go Go GO Stop stop"))
