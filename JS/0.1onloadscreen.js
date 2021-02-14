//onloadscreen
play = document.getElementById("btnplay");
/*
adding a new image
 let dialogbox = new Image();
dialogbox.src = "./assets/dialogue.png";
you.onload = () => {
  ctx.drawImage();
}; */

let newgame = () => {
  ctx.fillStyle = "white";
  ctx.font = "50px monospace";
  ctx.fillText("click anywhere to start", 10, 50);

  convo();
};

let convo = () => {
  canvas.onclick = () => {
    let s =
      "Hello,My name is Captain Estella, My    " +
      "job is to save the Earth.I heard that   " +
      "the worm hole opened, and the zombies   " +
      "are comming out. Is that true? ";
    yousay(s);
    canvas.onclick = () => {
      s =
        "Hi Canptain, Ahh i see you got my letter" +
        "We were locked in a that1 hole more than" +
        "250 year ago. now that we're out we will" +
        "conquer the earth, and deplete it's     " +
        "resources";
      invadersays(s);
      canvas.onclick = () => {
        s =
          "And who are you? [secretly calls        " +
          "re-enforcement but her satilite phone   " +
          "doesnot work]";
        yousay(s);
        canvas.onclick = () => {
          s =
            "My name is Trrr, and I will conquer the " +
            "earth. Btw Your phone will not work     " +
            "because we destroyed the satelites";
          invadersays(s);
          //
          canvas.onclick = () => {
            s = `Oh i see! Now What?`;
            yousay(s);
            canvas.onclick = () => {
              s = "Now we'll kill you, [points his gun]";
              invadersays(s);
              canvas.onclick = () => {
                s = `we both know that a fake`;
                yousay(s);
                canvas.onclick = () => {
                  s = `[shoots at the the sun]`;
                  invadersays(s);
                  canvas.onclick = () => {
                    s = "[launches the rocket] Not over my dead  " + "body!";
                    yousay(s);
                    canvas.onclick = () => {
                      s =
                        "We out-number you by great. and  we can  " +
                        "fight you";
                      invadersays(s);
                      canvas.onclick = () => {
                        s = "I will drive you back to your worm hole";
                        yousay(s);
                        canvas.onclick = () => {
                          s = "To his friends:lets have a war?shall we?";
                          invadersays(s);
                          canvas.onclick = () => {
                            ian();
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

function strModify(str, n) {
  let b = [];

  for (let i = 0; i < str.length; i += n) {
    b.push(str.substring(i, i + n));
  }
  return b;
}

let yousay = (words) => {
  clear();
  let wordsAr = strModify(words, 40);
  console.log(wordsAr);
  let dialogbox = new Image();
  dialogbox.src = "./assets/dialogue.png";
  let you = new Image();
  you.src = "./assets/rocket.png";

  you.onload = () => {
    ctx.drawImage(you, 620, 420, 150, 150);
  };

  dialogbox.onload = () => {
    console.log("your dialogue load");

    ctx.fillStyle = "red";
    let dbX = 400;
    let dbY = 100;
    ctx.drawImage(dialogbox, dbX, dbY, 400, 100 * wordsAr.length);
    ctx.font = "20px monospace";
    textX = dbX + 20;
    textY = dbY + getY(wordsAr, false);

    for (let i = 0; i < wordsAr.length; i++) {
      console.log(wordsAr[i]);
      ctx.fillText(wordsAr[i], textX, textY + i * 20, 350);
    }
    console.log(wordsAr);
  };
};

let invadersays = (words) => {
  clear();
  let wordsAr = strModify(words, 40);

  let invader = new Image();
  invader.src = "./assets/invader.jpg";
  let dialogbox = new Image();
  dialogbox.src = "./assets/clipart.png";
  invader.onload = () => {
    dialogbox.onload = () => {
      ctx.drawImage(invader, 20, 420, 150, 150);
      ctx.fillStyle = "red";

      let dbX = 50;
      let dbY = 50;

      ctx.drawImage(dialogbox, dbX, dbY, 400, 100 * wordsAr.length);
      ctx.font = "20px monospace";
      textX = dbX + 20;
      console.log("len", wordsAr.length);
      1;
      textY = dbY + getY(wordsAr, true);

      for (let i = 0; i < wordsAr.length; i++) {
        ctx.fillText(wordsAr[i], textX, textY + i * 20, 350);
      }
    };
  };
};
function getY(wordAr, invader) {
  let len = wordAr.length;
  if (invader) {
    if (len == 1) return 50;
    else if (len == 2) return 80;
    else if (len == 3) return 100;
    else if (len == 4) return 120;
    else if (len >= 5) return 150;
  } else {
    if (len == 1) return 40;
    else if (len == 2) return 60;
    else if (len == 3) return 80;
    else if (len == 4) return 100;
    else if (len >= 5) return 1510;
  }
}

let ian = () => {
  clear();
  ctx.fillStyle = "white";
  ctx.font = "50px monospace";
  ctx.fillText("click play to start", 10, 50);
  ctx.font = "20px monospace";
  ctx.fillText("There is an option to turn the lights off ", 10, 100);
  ctx.fillText("Instructions", 10, 130);
  ctx.fillText("Space                   Shoot", 10, 160);
  ctx.fillText("ArrowRight              MovingRight", 10, 190);
  ctx.fillText("Arrowleft               MovingLeft", 10, 230);

  play.style.display = "block";
};
let runo = () => {
  newgame();
};
