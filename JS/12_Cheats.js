//cheats

function quickwipe(rowy) {
  if (document.getElementById("playButton").disabled != false) {
    for (let i = 0; i < invaderArray.length; i++) {
      for (let j = 0; j < invaderArray[i].length; j++) {
        invaderArray[rowy][j] = -1;

      }
    }
  }
}
function quickwin() {
  if (document.getElementById("playButton").disabled != false) {
    for (let i = 0; i < invaderArray.length; i++) {
      for (let j = 0; j < invaderArray[i].length; j++) {
        invaderArray[i][j] = -1;

      }
    }
  }
}
function stop() {
  if (document.getElementById("playButton").disabled == true) {
    therocket.isalive = false;
    canvas.width = canvas.width
    clear();
    missile = -1
    ctx.fillStyle = "white"
    ctx.font = "50px monospace";
    ctx.fillText("Game stopped", (canvas.width / 2) - 100, canvas.height / 2);
  }
  else console.log("game not started")

}
function killone(row1, col1) {
  invaderArray[row1][col1] = -1;
}