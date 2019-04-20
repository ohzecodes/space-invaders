//clases.js
class invader {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.invaderimg = new Image();
        this.invaderimg.src = "./assets/invader.jpg"
        this.width = 50
        this.hieght = 50

    }
    displays() {
        ctx.drawImage(this.invaderimg, this.x, this.y, this.width, this.hieght);
    }


}
class rocket {
    constructor(x, y, width, hieght) {
        this.xr = x
        this.yr = y
        this.widthr = width
        this.hieghtr = hieght
        this.rocketimg = new Image();
        this.rocketimg.src = "./assets/rocket.png"
        this.isalive = true
    }

    displays() {
        ctx.drawImage(this.rocketimg, this.xr, this.yr, this.widthr, this.hieghtr);
    }

    moveright() {
        if (this.xr !== canvaswidth) {
            this.xr += 5;
        }
    }
    moveleft() {
        if (this.xr !== 10) {
            this.xr -= 5
        }

    }
    reset() {
        canvas.width = canvas.width;
        ctx.drawImage(this.rocketimg, xposrocket, this.yr, 50, 50)
        ctx.stroke();
    }

    isdead() {
        ctx.clearRect(this.x, this.y, this.width, this.height);

    }
}

class missile {
    constructor(color, x, y) {
        this.x = x + 20;
        this.y = y;
        this.color = color;
    }

    displays() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 5, 10)
        ctx.stroke();
        ctx.fill()
    }

}
