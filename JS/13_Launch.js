// Start of File: 13_Launch.js

let mInterval;

function launchRocketMisile(event) {
  if (
    playButton.disabled === true &&
    theRocket.isAlive === true &&
    event.code === "Space"
    // && mInterval === null
  ) {
    launchNew();
  }
}
function launchNew() {
  if (mInterval == null) {
    let missile1 = new Missile(
      "red",
      theRocket.xPositionRocket,
      theRocket.yPositionRocket
    );

    mInterval = setInterval(() => {
      missile1.show();
      missile1.y -= 15;
      let stop = collision(missile1);
      if (missile1.y <= 0 || stop == true || theRocket.isAlive === false) {
        clearInterval(mInterval);
        mInterval = null;
      }
    }, 60);
  }
}
function collision(Missile) {
  for (let i = 0; i < invaderArray.length; i++) {
    for (let j = 0; j < invaderArray[i].length; j++) {
      if (
        Missile.x >= invaderArray[i][j].x &&
        Missile.x <= invaderArray[i][j].x + 50 &&
        Missile.y >= invaderArray[i][j].y &&
        Missile.y <= invaderArray[i][j].y + 50
      ) {
        invaderArray[i][j] = -1;
        return true;
      }
    }
  }
  return false;
}
function youWin() {
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
  document.getElementById("playButton").disabled = false;
  return true;
}
document.addEventListener("keyup", launchRocketMisile);

//End of File: 13_Launch.js
