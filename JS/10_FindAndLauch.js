// Start of File: 10_FindAndLauch.js

let currentRow = 3;
let vGameOver = false;
let downInterval;

function randomElementWithFilter(array, filterFn) {
  const filteredArray = array.filter(filterFn);
  if (filteredArray.length === 0) {
    return undefined; // Return undefined if the filtered array is empty
  }
  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[randomIndex];
}

function findInvaderForMissileLaunch() {
  const invaderRow = invaderArray[currentRow];
  const randomInvader = randomElementWithFilter(invaderRow, (e) => e !== -1);
  if (!randomInvader) {
    currentRow--;
    return findInvaderForMissileLaunch();
  }

  invadersMissileLaunch(randomInvader);
}
function invadersMissileLaunch(position) {
  if (vGameOver) {
    return;
  }
  const invaderHieght = 50;
  let missile2 = new Missile("white", position?.x, position?.y + invaderHieght);
  downInterval = setInterval(function () {
    if (missile2 != null) {
      missile2.show();
      missile2.y += 5;
      let stop = collisionOfMissileWithRocket(missile2);
      if (missile2.y > 600 || (stop == true && missile2.y != null)) {
        clearInterval(downInterval);

        missile2 = null;
        findInvaderForMissileLaunch();
      }
    }
  }, 25);
}
function collisionOfMissileWithRocket(missile) {
  if (
    missile.x >= theRocket.xPositionRocket &&
    missile.x <= theRocket.xPositionRocket + 50 &&
    missile.y >= 500
  ) {
    vGameOver = true;
    theRocket.die();
    clearInterval(downInterval);
    canvas.width = canvas.width;
    clearInterval(gameInterval);
    if (mInterval != null) clearInterval(mInterval);
    gameOver();

    return true;
  } else {
    return false;
  }
}

//End of File: 10_FindAndLauch.js
