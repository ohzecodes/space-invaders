// playButton.js

play.onclick = playbtn;
// canvas.addEventListener('click', playbtn);
let gameInterval;
function playbtn() {
  gameOrStoryRunning();
  //   canvas.style.backgroundImage = "";
  play.disabled = true;
  play.style.display = "none";

  gameInterval = setInterval(function () {
    display();
    imove();
    youwin();
  }, 60);

  findI();
}

window.onkeydown = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
