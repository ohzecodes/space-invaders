// Start of File: 05_Classes.js

class Invader {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.invaderimg = new Image();
    this.invaderimg.src = "./assets/invader.png";
    this.width = 50;
    this.height = 50;
  }
  show() {
    ctx.drawImage(this.invaderimg, this.x, this.y, this.width, this.height);
  }
  isDead() {
    return this === -1;
  }
}
class Rocket {
  constructor(x, y, width, height) {
    this.xPositionRocket = x;
    this.yPositionRocket = y;
    this.widthRocket = width;
    this.hieghtRocket = height;
    this.rocketImg = new Image();
    this.rocketImg.src = "./assets/rocket.png";
    this.isAlive = true;
    this.speed = 10;
  }

  show() {
    ctx.drawImage(
      this.rocketImg,
      this.xPositionRocket,
      this.yPositionRocket,
      this.widthRocket,
      this.hieghtRocket
    );
  }

  moveRight() {
    if (this.xPositionRocket !== canvasWidth) {
      this.xPositionRocket += this.speed;
    }
  }
  moveLeft() {
    if (this.xPositionRocket !== 10) {
      this.xPositionRocket -= this.speed;
    }
  }
  reset() {
    canvas.width = canvas.width;
    ctx.drawImage(
      this.rocketImg,
      horizontalRocketPosition,
      this.yPositionRocket,
      50,
      50
    );
    ctx.stroke();
  }

  die() {
    this.isAlive = false;
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }
  isDead() {
    return !this.isAlive;
  }
}
class Missile {
  constructor(color, x, y) {
    this.x = x + 20;
    this.y = y;
    this.color = color;
  }

  show() {
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 5, 10);
    ctx.stroke();
    ctx.fill();
  }
}

//End of File: 05_Classes.js
