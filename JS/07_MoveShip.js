// Start of File: 07_MoveShip.js

function movingRocket(event) {
  event.preventDefault();
  if (event.key === "ArrowRight") {
    theRocket.moveRight();
  } else if (event.key === "ArrowLeft") {
    theRocket.moveLeft();
  }
}
document.addEventListener("keydown", movingRocket);

//End of File: 07_MoveShip.js
