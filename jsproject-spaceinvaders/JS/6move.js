// move.js

document.onkeydown = movingRocket;
function movingRocket() {

    if (event.key == "ArrowRight") {
        therocket.moveright()

    }
    else if (event.key == "ArrowLeft") {
        therocket.moveleft();
    }
    else if (event.code === "Digit1") {
        location.reload();
    }

}

