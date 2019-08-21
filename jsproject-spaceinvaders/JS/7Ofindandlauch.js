//findandlaunch 
let row = 3
function findI() {
  let r = +Math.floor(Math.random() * 10);
  if (invaderArray[row][r] != -1) {
    ilaunch(r);
  }
  else {
    let found = false;
    for (i = r + 1; i < invaderArray[row].length; i++) {
      if (invaderArray[row][i] != -1) {
        ilaunch(i);
        found = true;
        break;
      }
    }
    if (found == false) {
      for (i = 0; i < r; i++) {
        if (invaderArray[row][i] != -1) {
          ilaunch(i);
          found = true;
          break;
        }
      }
    }
    if (found == false) {
      row--;
      findI();
    }
  }

}

let downInterval;
function ilaunch(r) {
  try {
    
 
  let missile2 = new missile('white', invaderArray[row][r].x, (invaderArray[row][r].y + 50))
  downInterval = setInterval(function () {
    if (missile2 != null) {
      missile2.displays();
      missile2.y += 5;
      let stop = collision1(missile2);
      if (missile2.y > 600 || stop == true && missile2.y != null) {
        clearInterval(downInterval);
        // console.log("dead" + missile2);
        missile2 = null;
        findI();
      }
    }


  }, 25); } catch (error) {
    
  }
}
function collision1(missile) {
  // console.log(missile.y);
  //console.log(therocket.xr);
  if (missile.x >= therocket.xr &&
    missile.x <= therocket.xr + 50 &&
    missile.y >= 500) {

    therocket.isalive = false

    therocket.isdead();
    canvas.width = canvas.width
    clearInterval(gameInterval);
    if (mInterval != null)
      clearInterval(mInterval)
    gameover();

    return true;
  }
  else {

    return false;

  }
}