// Start of File: 01_Variables.js

const playButton = document.getElementById("playButton");
const storyModeCheckbox = document.getElementById("storyModeCheckBox");
const lightCheckBox = document.getElementById("LightsCheckBox");

const horizontalRocketPosition = 100;
const spacing = 55;
const firstNumber = 100;
const oneToTen = Array.from({ length: 10 }, (_, index) => index + 1);
const line = Array.from({ length: 4 }, (_, index) => (index + 1) * 50);
const invadersXPosition = Array.from(
  { length: 11 },
  (_, index) => firstNumber + index * spacing
);
let invaderArray = new Array(line.length);
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width - 50;

//End of File: 01_Variables.js
