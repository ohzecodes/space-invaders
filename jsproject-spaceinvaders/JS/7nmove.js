//inmove
//this file moves the invaders 
function imove() {

  let move = 5;
  for (let i = 0; i < invaderArray.length; i++) {
    for (let j = 0; j < invaderArray[i].length; j++) {

      switch (invaderArray[i][j].x == canvaswidth) {
        case (false):
          invaderArray[i][j].x += move;
          break;
        case (true):

          invaderArray[i][j].x = -move;
          break;
      }
    }
  }
}

