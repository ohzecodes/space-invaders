// Start of File: 14_ButtonPlay.js

let gameInterval;
function playBtnFn() {
  gameOrStoryRunning();

  playButton.disabled = true;
  playButton.style.display = "none";

  gameInterval = setInterval(() => {
    display();
    movingInvaders();
    youWin();
  }, 60);

  findInvaderForMissileLaunch();
}

window.onkeydown = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

playButton.onclick = playBtnFn;

//End of File: 14_ButtonPlay.js
