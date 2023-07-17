
// invader.js

let invaderArray = new Array(4); //define rows. 
for (let row = 0; row < invaderArray.length; row++) {
    invaderArray[row] = new Array(10);
    for (let col = 0; col < 10; col++) { //defines columns.
        invaderArray[row][col] = new invader(posofX[onetoten[col]], line[row]);

    }
}
function imove() {
    for (let l = 0; l > 4; l++) {
        for (let k = 0; k < 10; k++) {
            invaderArray[l][k].x += 10

        }
    }
}

function displayInvader() {
    for (let i = 0; i < invaderArray.length; i++)
        for (let j = 0; j < invaderArray[i].length; j++)
            if (invaderArray[i][j] != -1)
                invaderArray[i][j].displays();
}
