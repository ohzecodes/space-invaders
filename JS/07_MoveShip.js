// move.js

document.addEventListener("keydown",movingRocket) ;
function movingRocket(event) {

    if (event.key == "ArrowRight") {
        event.preventDefault();
        therocket.moveright()

    }
    else if (event.key == "ArrowLeft") {
        event.preventDefault();
        therocket.moveleft();
    }
    else if (event.code === "Digit1") {
        event.preventDefault();
        location.reload();
    }

}

