//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  // get the number of miliseconds of the date passed in
  let miliSeconds = Date.parse(date)

  // 10^9 seconds in miliseconds
  let gigaMiliSeconds = 10**9 * 1000 

  // Add the seconds together
  let totalMiliSeconds = gigaMiliSeconds + miliSeconds

  // Get a new date object set at the combined seconds time
  let newDate = new Date(totalMiliSeconds)

  // Return the new Date
  return newDate

};
