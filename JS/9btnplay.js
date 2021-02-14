// btnplay.js

document.getElementById("btnplay").onclick = playbtn;
// canvas.addEventListener('click', playbtn);
let gameInterval;
function playbtn() {
  //   canvas.style.backgroundImage = "";
  document.getElementById("btnplay").disabled = true;
  document.getElementById("btnplay").style.display = "none";

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
