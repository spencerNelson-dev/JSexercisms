//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// Given a string, return a string with the nucleotide-count
export class NucleotideCounts {
  static parse(stringDNA) {

    // Check for empty DNA
    if(stringDNA == ''){return '0 0 0 0'}

    // Split the sting into an array
    let arrayDNA = stringDNA.split('')

    // reduce the array into an object called count that
    // holds the counts of each nucleotide
    let count = arrayDNA.reduce( (result, value) => {

      // Check if every nucleotide is valid
      if(value != 'A'&&
        value != 'C' &&
        value != 'G' &&
        value != 'T') {throw new Error('Invalid nucleotide in strand')}

      // Count the nucleotide
      result[value] += 1

      return result

    },{A:0, C:0, G:0, T:0})
    

    return `${count.A} ${count.C} ${count.G} ${count.T}`
  }
}
