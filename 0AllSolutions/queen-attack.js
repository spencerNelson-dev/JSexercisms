
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.


 export class QueenAttack {
    constructor(positions = {white: [0,3], black: [7, 3]}) {

        this.white = positions.white

        this.black = positions.black   
        
        // Check to see if the queens are in the same position
        if (this.white[0] == this.black[0] &&
            this.white[1] == this.black[1]){

            throw new Error('Queens cannot share the same space')
        }
    }

    toString() {
        const MAX_ROWS = 8
        const MAX_COL = 8

        let board = ""

        // build our board by looping through 8X8 grid
        for(let row = 0; row < MAX_ROWS; row++){

            for( let col = 0; col < MAX_COL; col++){

                let char = "_"

                // if the (row, col) matches a queen's position, 
                // put a W or B
                if(this.white[0] == row && this.white[1] == col){

                    char = "W"
                } else if (this.black[0] == row && this.black[1] == col){

                    char = "B"
                }

                // if the last char of a row
                // do not put a space
                if (col == MAX_COL -1){

                    board += char
                } else{
                    board += `${char} `
                }

            } // end of col loop

            // end each row with a new line
            board += "\n"

        } // end of row loop

        return board

    }// end of toString()

    canAttack() {
        
        let attack = false

        // Check if queens have same x position
        if( this.white[0] == this.black[0]){

            attack = true

        // Check if queens have same y position
        } else if( this.white[1] == this.black[1] && !attack){

            attack = true

        // Check if queens lie on a line with slope 1
        } else{

            let slope = (this.white[1] - this.black[1]) / 
                        (this.white[0] - this.black[0])

            if( Math.abs(slope) == 1){

                attack = true
            }

        } // end of if else

        return attack

    }// end of canAttack()
}

