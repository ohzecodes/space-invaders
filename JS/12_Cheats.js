// Start of File: 12_Cheats.js

function quickWipe(rowY) {
  if (!playButton.disabled) {
    console.log("First Start the game");
    return;
  }
  for (let j = 0; j < invaderArray[0].length; j++) {
    invaderArray[rowY][j] = -1;
  }
}
function quickWin() {
  if (!playButton.disabled) {
    console.log("First Start the game");
    return;
  }
  for (let i = 0; i < invaderArray.length; i++) {
    quickWipe(i);
  }
}

function killOneInvader(row, col) {
  if (!playButton.disabled) {
    console.log("First Start the game");
    return;
  }
  invaderArray[row][col] = -1;
}

//End of File: 12_Cheats.js
