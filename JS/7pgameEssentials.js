//gameEssentials 
function gameover() {
  stop();
  clear();
  
  ctx.font = "100px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Game Over", 180, 300);
  ctx.fill();
  therocket.isalive= false
 
}


function clear() {
  canvas.width = canvas.width
  clearInterval(downInterval);
  clearInterval(mInterval);
  clearInterval(gameInterval);
  
  canvas.width = canvas.width
}

