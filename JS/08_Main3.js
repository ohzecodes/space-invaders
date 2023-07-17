//main.js


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvaswidth = canvas.width - 50


let therocket = new rocket(xposrocket, 500, 50, 50)

function display() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  displayInvader();
  if (therocket.isalive == true) {
    therocket.displays();
  }
  else if (therocket.isalive == false) {
    therocket.isdead()
  }

}




