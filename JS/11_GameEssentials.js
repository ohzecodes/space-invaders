// Start of File: 11_GameEssentials.js

function stop() {
  if (!playButton.disabled) {
    console.log("Game Not Started ");
    return;
  }
  theRocket.isAlive = false;
  canvas.width = canvas.width;
  clear();
  Missile = -1;
  ctx.fillStyle = "white";
  ctx.font = "50px monospace";
  ctx.fillText("Game stopped", canvas.width / 2 - 100, canvas.height / 2);
}

function gameOver() {
  stop();
  clear();

  ctx.font = "100px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Game Over", 180, 300);
  ctx.fill();
  theRocket.isAlive = false;
}
function clear() {
  canvas.width = canvas.width;
  clearInterval(downInterval);
  clearInterval(mInterval);
  clearInterval(gameInterval);

  canvas.width = canvas.width;
}

//End of File: 11_GameEssentials.js
