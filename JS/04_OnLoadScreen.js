// Start of File: 04_OnLoadScreen.js

const gameOrStoryRunning = () => {
  storyModeCheckbox.removeEventListener("click", runOnload);
  document.getElementById("storyMode").style.display = "none";
};
const newGame = () => {
  ctx.fillStyle = "white";
  ctx.font = "50px monospace";
  ctx.fillText("Click Anywhere to Start", 50, 100);
  canvas.onclick = () => {
    gameOrStoryRunning();
    conversation();
  };
};

const conversation = () => {
  playButton.hide = true;
  const whoSays = { You: true, Invader: false },
    dialogues = [
      {
        speaker: whoSays.You,
        message:
          "Hello, my name is Captain Estella. My job is to save the Earth. I heard that the wormhole opened, and the zombies are coming out. Is that true"
      },
      {
        speaker: whoSays.Invader,
        message:
          "Hi Captain, ahh I see you got my letter. We were locked in that hole more than 250 years ago. Now that we're out, we will conquer the Earth and deplete its resources."
      },
      {
        speaker: whoSays.You,
        message:
          "And who are you? [secretly calls for reinforcement but her satellite phone does not work]"
      },
      {
        speaker: whoSays.Invader,
        message:
          "My name is Trrr, and I will conquer the Earth. By the way, your phone will not work because we destroyed the satellites."
      },
      { speaker: whoSays.You, message: "Oh, I see! Now what?" },
      {
        speaker: whoSays.Invader,
        message: "Now we'll kill you. [points his gun]"
      },
      { speaker: whoSays.You, message: "We both know that's fake." },
      { speaker: whoSays.Invader, message: "[shoots at the sun]" },
      {
        speaker: whoSays.You,
        message: "[launches the Rocket] Not over my dead body!"
      },
      {
        speaker: whoSays.Invader,
        message: "We outnumber you greatly and we can fight you."
      },
      {
        speaker: whoSays.You,
        message: "I will drive you back to your wormhole."
      },
      {
        speaker: whoSays.Invader,
        message: "To his friends: Let's have a war? Shall we?"
      },
      {
        speaker: whoSays.You,
        message: "Click anywhere to begin",
        action: showInstructions
      }
    ];

  let dialogueIndex = 0;

  function progressDialogue() {
    const wait = 2000;
    const { speaker, message, action } = dialogues[dialogueIndex];
    if (speaker) {
      initiateYouSay(message);
    } else {
      initiateInvaderSays(message);
    }
    if (action) {
      canvas.onclick = action;
    } else {
      dialogueIndex++;
      if (dialogueIndex < dialogues.length) {
        setTimeout(progressDialogue, wait);
      } else {
        showInstructions();
      }
    }
  }

  setTimeout(progressDialogue, 200);
};

const splitStringIntoChunks = (str, n) =>
  str.match(new RegExp(`.{1,${n}}`, "g")) || [];

const initiateYouSay = (words) => {
  clear();
  let wordsArray = splitStringIntoChunks(words, 40);

  let dialogbox = new Image();
  dialogbox.src = "./assets/dialogue.png";
  let you = new Image();
  you.src = "./assets/Rocket.png";

  you.onload = () => {
    ctx.drawImage(you, 620, 420, 150, 150);
  };

  dialogbox.onload = () => {
    ctx.fillStyle = "red";
    let dbX = 400;
    let dbY = 100;
    ctx.drawImage(dialogbox, dbX, dbY, 400, 100 * wordsArray.length);
    ctx.font = "20px monospace";
    textX = dbX + 20;
    textY = dbY + getY(wordsArray.length, false);

    for (let i = 0; i < wordsArray.length; i++) {
      ctx.fillText(wordsArray[i], textX, textY + i * 20, 350);
    }
  };
};

const initiateInvaderSays = (words) => {
  clear();
  let wordsArray = splitStringIntoChunks(words, 40);

  let Invader = new Image();
  Invader.src = "./assets/Invader.png";
  let dialogbox = new Image();
  dialogbox.src = "./assets/clipart.png";
  Invader.onload = () => {
    dialogbox.onload = () => {
      ctx.drawImage(Invader, 20, 420, 150, 150);
      ctx.fillStyle = "red";

      let dbX = 50;
      let dbY = 50;

      ctx.drawImage(dialogbox, dbX, dbY, 400, 100 * wordsArray.length);
      ctx.font = "20px monospace";
      textX = dbX + 20;
      textY = dbY + getY(wordsArray.length, true);

      for (let i = 0; i < wordsArray.length; i++) {
        ctx.fillText(wordsArray[i], textX, textY + i * 20, 350);
      }
    };
  };
};
function getY(length, invader) {
  const invaderLengthMap = { 1: 50, 2: 80, 3: 100, 4: 120 },
    youLengthMap = { 1: 40, 2: 60, 3: 80, 4: 100 };

  if (invader) {
    return length >= 5 ? 150 : invaderLengthMap[length];
  }
  return length >= 5 ? 1510 : youLengthMap[length];
}

const showInstructions = () => {
  clear();
  ctx.fillStyle = "white";
  ctx.font = "50px monospace";
  ctx.fillText("Click Play to Start", 50, 100);
  ctx.font = "20px monospace";
  let y = 180;
  ctx.fillText("Instructions", 130 + 200, y);
  const yAdding = 40;
  const xKeys = 10 + 200;
  const xAction = 300 + 200;
  y += yAdding;
  ctx.fillText("Space", xKeys, y);
  ctx.fillText("Shoot", xAction, y);
  y += yAdding;
  ctx.fillText("ArrowRight", xKeys, y);
  ctx.fillText("Moving Right", xAction, y);
  y += yAdding;
  ctx.fillText("Arrowleft", xKeys, y);
  ctx.fillText("Moving Left", xAction, y);

  playButton.style.display = "block";
};
const runOnload = () => {
  clear();
  if (storyModeCheckbox.checked) {
    playButton.style.display = "none";
    return newGame();
  }
  return showInstructions();
};

storyModeCheckbox.addEventListener("click", runOnload);
document.body.onload = runOnload;

//End of File: 04_OnLoadScreen.js
