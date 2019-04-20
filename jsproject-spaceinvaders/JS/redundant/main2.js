document.getElementById('v').innerHTML="2";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

document.body.style.backgroundcolor="red"
let canvaswidth=canvas.width-50
class invader{
    constructor(x,y){
        this.x=x
        this.y=y
        this.invaderimg = new Image();
        this.invaderimg.src="./assets/invader.jpg"
        this.width=50
        this.hieght=50

    }
    displays() {
        ctx.drawImage(this.invaderimg, this.x, this.y, this.width, this.hieght);
    }
    // hide(){}
}
let xposrocket = 20;
class rocket{
    constructor(){
        this.xr=xposrocket
        this.yr=500
        this.rocketimg = new Image();
        this.rocketimg.src="./assets/rocket.png"
        this.widthr=50
        this.hieghtr=50

    }
    displays() {
       
        ctx.drawImage(this.rocketimg, this.xr, this.yr, this.widthr, this.hieghtr);
    }
    // hide(){}
    // health(){}
    // shoot(){}


    moveright(){
        if(xposrocket!==canvaswidth){
        xposrocket+=5;
        }
        
    }
    moveleft(){
        if (xposrocket!==10){
        xposrocket-=5
        }
       
    }
    reset(){
        canvas.width=canvas.width;
        ctx.drawImage(this.rocketimg, xposrocket, this.yr, 50, 50)
        ctx.stroke();
    }

}

// class missile{
//     constructor(){}
//     displays(){
//         ctx.strokeStyle = "red";
//         ctx.fillStyle="red"
//         ctx.fillRect(0,0,1,1)
//         ctx.stroke();
//         ctx.fill()
//     }
// }
    



let invade=new invader(100,200);
let invade2=new invader(100,300)
let rocke=new rocket();
function display(){
    invade.displays();
    rocke.displays();
    invade2.displays();
}
function disablePlay(){
    display();
    document.getElementById("btnplay").disabled = true;
}

document.onkeydown=movingRocket;
function movingRocket(){

    if(event.key=="ArrowRight"){
        //move right
        rocke.moveright();
        rocke.reset();
        invade.displays();
    }
    else if(event.key=="ArrowLeft"){
        //move left
        rocke.moveleft();
        rocke.reset();
        invade.displays();
        
    }  
    else if (event.code==="Digit1"){
        location.reload();
  }
}