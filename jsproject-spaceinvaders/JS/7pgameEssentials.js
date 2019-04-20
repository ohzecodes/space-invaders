//gameEssentials 
function gameover() {
  clear();

  ctx.font = "100px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Game Over", 180, 300);
  ctx.fill();


}


function clear() {
  canvas.width = canvas.width
  clearInterval(downInterval);
  clearInterval(gameInterval);
  clearInterval(mInterval);
  canvas.width = canvas.width
}

