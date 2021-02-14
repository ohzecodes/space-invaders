//launch.js
// this code runs the rocket's missile

let mInterval = null;
document.addEventListener("keyup", launch);
function launch(event) {
  if (
    document.getElementById("btnplay").disabled == true &&
    therocket.isalive == true
  ) {
    if (event.code === "Space" && mInterval == null) {
      console.log("i");
      launchnew();
    }
  }
}
function launchnew() {
  if (mInterval == null) {
    let missile1 = new missile("red", therocket.xr, therocket.yr);
    console.log(missile1);
    mInterval = setInterval(function () {
      missile1.displays();
      missile1.y -= 15;
      let stop = collision(missile1);
      if (missile1.y <= 0 || stop == true || therocket.isalive === false) {
        clearInterval(mInterval);
        mInterval = null;
      }
    }, 60);
  }
}
function collision(missile) {
  for (let i = 0; i < invaderArray.length; i++) {
    for (let j = 0; j < invaderArray[i].length; j++) {
      if (
        missile.x >= invaderArray[i][j].x &&
        missile.x <= invaderArray[i][j].x + 50 &&
        missile.y >= invaderArray[i][j].y &&
        missile.y <= invaderArray[i][j].y + 50
      ) {
        invaderArray[i][j] = -1;
        return true;
      }
    }
  }
  return false;
}

function youwin() {
  for (let i = 0; i < invaderArray.length; i++) {
    for (let j = 0; j < invaderArray[i].length; j++) {
      if (invaderArray[i][j] != -1) {
        return false;
      }
    }
  }
  clear();
  ctx.font = "100px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("YOU WIN", 180, 300);
  ctx.fill();
  return true;
}
