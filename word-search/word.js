//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
    constructor(grid = []) {
        this.grid = grid
    }

    find(wordsToFind = []) {

        let result = {}

        // for each word in wordsToFind
        for (let word of wordsToFind) {

            //console.log(word)

            // get the coordinates of the first letter
            // in the word
            let letterPositions = this.getStartingPositions(word)

            //console.log(word, letterPositions)

            // for each staring position we look in the 8
            // directions around looking for the second letter

            let paths = []

            // get all paths
            letterPositions.forEach(position => {

                paths.push(this.makePath([position], word))
            })

            for (let path of paths) {
                //console.log(word.length, path.length)
                // console.log(path)

                if (path.length == word.length) {

                    result[word] = {
                        start: [path[0][0] + 1, path[0][1] + 1],
                        end: [path[path.length - 1][0] + 1, path[path.length - 1][1] + 1]
                    }
                }
            }


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

            }) // end of loop through row

        }) // end of loop through grid

        return startPositions
    }

    findingNeighbors(grid, coord, word, index) {

        let rtnValue = []

        let rowLimit = grid.length - 1;
        let columnLimit = grid[0].length - 1;

        for (let x = Math.max(0, coord[0] - 1); x <= Math.min(coord[0] + 1, rowLimit); x++) {

            for (let y = Math.max(0, coord[1] - 1); y <= Math.min(coord[1] + 1, columnLimit); y++) {

                // if the grid[x,y] != [startX, startY]
                if (x !== coord[0] || y !== coord[1]) {

                    // check to see if it matches our
                    // next letter and we also check if
                    // the next coord is in line with previous coords
                    // and is not a duplicate coord

                    if (grid[x][y] == word[index]) {

                        // add the coord
                        rtnValue.push([x, y])
                    }
                }
            }
        }

        return rtnValue
    }

    makePath(path = [], word, index = 0) {


        // make sure the path is not empty
        if (path.length != 0 && path.length < word.length) {

            // get our neighbors from the last item in the array
            let neighbors = this.findingNeighbors(this.grid, path[path.length - 1], word, index + 1)

            // if the point doesn't have neighbors
            // remove it from the path
            if (neighbors.length == 0) {
                path.pop()
            }

            // for each neighbor
            for (let neighbor of neighbors) {

                // add the neighbor to the path

                // stop if the path length is longer than
                // the word length
                // don't add a duplicate coord
                if (path.length != word.length && !this.isDuplicate(path, neighbor)) {
                    path.push(neighbor)

                    // check to see if path makes sense
                    if (this.isValidSlope(path)) {
                        //console.log("index, path",index, path)

                        // continue to make the path
                        this.makePath(path, word, index + 1)
                    } else {

                        console.log("path", path, "ns", neighbors, "n", neighbor)
                        // // remove the bad coords

                        if (neighbor == neighbors[neighbors.length - 1]) {
                            console.log(true)
                            path.splice(1, path.length - 1)
                        } else {
                            path.pop()
                        }



                        console.log("path", path)
                    }

                }

            }
        }

        return path
    }

    removePoints(pointsArr = []) {

        let rtnArr = []

        let start = pointsArr[0]
        let end = pointsArr[pointsArr.length - 1]

        //console.log("start:", start, "end", end)

        // if the row position matches
        if (start[0] == end[0]) {

            let x = start[0]

            for (let point of pointsArr) {
                if (point[0] == x) {
                    rtnArr.push(point)
                }
            }

            // else if the col position matches
        } else if (start[1] == end[1]) {

            let y = start[1]

            for (let point of pointsArr) {
                if (point[1] == y) {
                    rtnArr.push(point)
                }
            }
            // else check if it lies on a slope of 1 
        } else {

            let slope = (start[1] - end[1]) /
                (start[0] - end[0])

            //console.log("slope", slope)

            if (Math.abs(slope) == 1) {

                for (let point of pointsArr) {
                    if (Math.abs(point[1] - start[1]) == Math.abs(point[0] - start[0])) {
                        rtnArr.push(point)
                    }
                }
            }
        }

        return rtnArr
    }

    isValidSlope(chainArr = []) {
        let rtnVal = false
        let setDirection = false

        if (chainArr.length <= 1) {
            return true
        }

        // check to see if x values are the same
        for (let index = 0; index < chainArr.length - 1; index++) {
            if (chainArr[index][0] == chainArr[index + 1][0]) {
                rtnVal = true
                setDirection = true
            } else {
                rtnVal = false
                break;
            }
        }

        // check to see if y valuse are the same
        // if the rtnVal is still false
        if (!rtnVal && ! setDirection) {
            for (let index = 0; index < chainArr.length - 1; index++) {
                if (chainArr[index][1] == chainArr[index + 1][1]) {
                    rtnVal = true
                    setDirection = true
                } else {
                    rtnVal = false
                    break;
                }
            }
        }

        // check to see if the points lie on a diagonal
        // with slope 1
        if (!rtnVal && !setDirection) {

            let endIndex = chainArr.length - 1

            // let changeInY = chainArr.reduce((sum, value) => sum += value[1], 0)
            // let changeInX = chainArr.reduce((sum, value) => sum += value[0], 0)

            // let slope = (changeInY / changeInX)

            let slope = (chainArr[0][1] - chainArr[endIndex][1]) /
                (chainArr[0][0] - chainArr[endIndex][0])

            if (Math.abs(slope) == 1) {
                rtnVal = true
            } else {
                rtnVal = false
            }
        }
        return rtnVal

    }

    isDuplicate(chain, pos) {
        let rtnVal = false

        chain.forEach((value) => {

            if (pos[0] == value[0] && pos[1] == value[1]) {
                rtnVal = true
            }
        })

        return rtnVal
    }
}

const grid = [
    'pava',
    'java'       ]

let wordSearch = new WordSearch(grid)

let results = wordSearch.find([
    'clojure',
    'elixir',
    'ecmascript',
    'rust',
    'java',
    'lua',
    'lisp',
    'ruby',
  ])

console.log(results)




/*
[
    'clojure',
    'elixir',
    'ecmascript',
    'rust',
    'java',
    'lua',
    'lisp',
    'ruby',
  ]
*/
