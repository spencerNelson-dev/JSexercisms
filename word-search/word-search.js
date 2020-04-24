/* 
This code is very messy, but passes all the tests, I will go through at a later date
and clean it up.
*/

class WordSearch {
  constructor(grid = []) {
    this.grid = grid
  }

  find(wordsToFind = []) {

    let result = {}

    // for each word in wordsToFind
    for (let word of wordsToFind) {

      // get all the coordinates where the first
      // letter in the word exists in the grid
      let startingPositions = this.getStartingPositions(word)

      // for each starting position we will build
      // a path or chain or coordinates through
      // the grid ending at our last letter in the 
      // word we want to find

      // set up or collection of paths
      // there should be the same number of paths
      // as there are starting points
      let paths = []

      // for each starting position
      startingPositions.forEach(position => {

        // push the path to our collection of paths
        paths.push(this.makePath([position], word))
      })

      // now we go through our path looking for
      // a path that is the same length as
      // our word we are looking for
      for (let path of paths) {
        if (path.length == word.length) {

          // we create an object with a start
          // and end property and add it to
          // our result object with the property
          // name of the word we found
          result[word] = {

            // the tests require a indexes to start at 1
            // we we have to modify our start and
            // end points
            start: [path[0][0] + 1, path[0][1] + 1],
            end: [path[path.length - 1][0] + 1, path[path.length - 1][1] + 1]
          }
        }

      } // end of loop through paths

    } // end of loop through wordsToFind

    return result
  }

  getStartingPositions(word) {
    // get the first letter of the word
    let firstLetter = word[0]

    // we will be finding all starting positions
    let startPositions = []

    // Go through the grid and find the first word
    // Go through each row in the grid
    this.grid.forEach((row, rowIndex) => {

      //compare each letter in the row to our first letter
      [...row].forEach((letter, letterIndex) => {

        // if the letter matches
        if (letter == firstLetter) {

          // add the coordinates to our start positions
          startPositions.push([rowIndex, letterIndex])
        }

      }) // end of loop through col

    }) // end of loop through rows

    return startPositions
  }

  findNeighbors(grid, coord, word, index) {

    let neighbors = []

    // set our limits on where we are looking
    // for neighbors, we only want the letters
    // that are directly surrounding our passed
    // in coordinate
    let rowLimit = grid.length - 1;
    let columnLimit = grid[0].length - 1;

    // we loop through the surrounding letters
    for (let row = Math.max(0, coord[0] - 1); row <= Math.min(coord[0] + 1, rowLimit); row++) {

      for (let col = Math.max(0, coord[1] - 1); col <= Math.min(coord[1] + 1, columnLimit); col++) {

        // we do not want to include the passed in
        // coordinate
        if (row !== coord[0] || col !== coord[1]) {

          // check to see if it matches our
          // next letter in our word
          if (grid[row][col] == word[index]) {

            // add the coord
            neighbors.push([row, col])
          }
        }
      }
    }

    return neighbors
  }

  makePath(path = [], word, index = 0) {

    // make sure the path is not empty and
    // the path is less than the word length
    // we don't want to have a path that is longer
    // than the word length
    if (path.length != 0 && path.length < word.length) {

      // get our neighbors from the last item in the path
      let neighbors = this.findNeighbors(this.grid, path[path.length - 1], word, index + 1)

      // if the last point doesn't have neighbors
      // remove it from the path
      // we do this because we know that the path is not yet complete
      // and if the last coordinate doesn't have a neighbor then
      // we know that the last coordinate cannot be part of our chain
      if (neighbors.length == 0) {
        path.pop()
      }

      // for each neighbor we want to see
      // if it is a valid point on our path
      for (let neighbor of neighbors) {

        // check if
        // the path length is longer than the word length
        // and if the coordinate is a duplicate
        if (path.length != word.length && !this.isDuplicate(path, neighbor)) {
          path.push(neighbor)

          // check to see if path makes sense
          // by checky the slope of the new path
          if (this.isValidSlope(path)) {

            // continue to make the path
            this.makePath(path, word, index + 1)

          } else { // if the slope is not valid

            // if this was the last neighbor
            if (neighbor == neighbors[neighbors.length - 1]) {

              // remove everything but the starting coordinate
              path.splice(1, path.length - 1)

            } else {

              // remove the most recent path addition
              path.pop()
            }
          }

        } // end of if
      } // end of loop through neighbors
    } // end of if

    return path
  }

  isValidSlope(chainArr = []) {

    // set our return value
    let rtnVal = false

    // setDirection tells us if the chain
    // has a established direction, either
    // horizontal or vertical
    let setDirection = false

    // a chain of 1 point has a
    // valid slope
    if (chainArr.length <= 1) {
      return true
    }

    // check to see if x values are the same
    // loop through the coordinates
    for (let index = 0; index < chainArr.length - 1; index++) {
      // if the x values of the current point and next point
      // are the same
      if (chainArr[index][0] == chainArr[index + 1][0]) {
        // set our return value
        rtnVal = true
        // set our direction bool
        setDirection = true;
      } else {
        // if there is one point that doen't match
        // then the rtnVale is false
        rtnVal = false

        // break out at as soon as we
        // see an incompatable point
        break;
      }
    }

    // check to see if y values are the same
    // if the setDirection is still false
    if (!setDirection) {

      // loop through our coordinates
      for (let index = 0; index < chainArr.length - 1; index++) {

        // check if the ajacent points have the same y value
        if (chainArr[index][1] == chainArr[index + 1][1]) {

          // set our return value
          // and our direction bool
          rtnVal = true
          setDirection = true

        } else {

          // set to false if a point
          // does not have same y value
          rtnVal = false

          // leave loop
          break;
        }
      }
    }

    // check to see if the points lie on a diagonal
    // with slope 1
    if (!setDirection) {

      // get our last point index
      let endIndex = chainArr.length - 1

      // calculate slope using first and last point
      let slope = (chainArr[0][1] - chainArr[endIndex][1]) /
        (chainArr[0][0] - chainArr[endIndex][0])

      // if the abs of slope is 1
      if (Math.abs(slope) == 1) {

        // return true
        rtnVal = true
      } else {

        // return false
        rtnVal = false
      }
    }
    return rtnVal

  }

  isDuplicate(chain, pos) {
    // default value is false
    let rtnVal = false

    // go through each point in our chain
    chain.forEach((value) => {

      // if new point (pos) matches
      // a point in the chain
      if (pos[0] == value[0] && pos[1] == value[1]) {
        
        //return true
        rtnVal = true
      }
    })

    return rtnVal
  }
}

export default WordSearch;
