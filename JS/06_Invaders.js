// Start of File: 06_Invaders.js

const fillInvaders = () => {
  for (let row = 0; row < invaderArray.length; row++) {
    invaderArray[row] = new Array(10);
    for (let col = 0; col < 10; col++) {
      //defines columns.
      invaderArray[row][col] = new Invader(
        invadersXPosition[oneToTen[col]],
        line[row]
      );
    }
  }
};

function displayInvaders() {
  for (let i = 0; i < invaderArray.length; i++)
    for (let j = 0; j < invaderArray[i].length; j++)
      if (invaderArray[i][j] != -1) invaderArray[i][j].show();
}
fillInvaders();

//End of File: 06_Invaders.js
