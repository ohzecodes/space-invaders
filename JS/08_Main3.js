// Start of File: 08_Main3.js

const theRocket = new Rocket(horizontalRocketPosition, 500, 50, 50);

function display() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  displayInvaders();
  if (theRocket.isDead()) {
    theRocket.die();
  } else {
    theRocket.show();
  }
}

//End of File: 08_Main3.js
