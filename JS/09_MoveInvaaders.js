// Start of File: 09_MoveInvaaders.js

function movingInvaders() {
  let move = 5;
  for (let i = 0; i < invaderArray.length; i++) {
    for (let j = 0; j < invaderArray[i].length; j++) {
      if (invaderArray[i][j].x === canvasWidth) {
        invaderArray[i][j].x =move ;
      } else {
        invaderArray[i][j].x += move;
      }
    }
  }
}

//End of File: 09_MoveInvaaders.js
