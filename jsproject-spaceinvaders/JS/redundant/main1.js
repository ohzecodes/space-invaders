document.getElementById('v').innerHTML="1";


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");




let imvaderimg = new Image();

let aleinsource = "./assets/invader.jpg"

imvaderimg.src = aleinsource

imvaderimg.addEventListener("load", loadinvader)

function loadinvader() {
    
    let xpos = 0
    let ypos = 0
    let hieght = 50
    let width = 50
    ctx.drawImage(imvaderimg, xpos, ypos, width, hieght)

}

let rocketsource = "./assets/rocket.png"
let rocketimg = new Image();
rocketimg.src = rocketsource
rocketimg.addEventListener("load", loadrocket)
    
    
    
let xposrocket = 10

function loadrocket() {

    ctx.drawImage(rocketimg, xposrocket, 450, 50, 50)
    ctx.stroke();
}


/*NEW JS FILE move */
document.onkeydown=movingrocket;
function movingrocket(){
 console.log(event.key)
    if(event.key=="ArrowRight"){
        //move right
        xposrocket+=5
    }
    else if(event.key=="ArrowLeft"){
        //move left
        xposrocket-=5
    }
    canvas.width=canvas.width;
    loadinvader()
    ctx.drawImage(rocketimg, xposrocket, 450, 50, 50)
    ctx.stroke();
    
}
