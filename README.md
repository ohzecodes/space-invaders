# Space Invaders
Space Invaders game using Vanilla JavaScript.

## Overview 
This was a final project for an Computer Science course in web programming (Introduction to Web Programming). It was a solitary project that enabled me to build my favorite game using Vanilla JavaScript only. 
Space Invaders is a classic arcade video game where players control a spaceship to defend against descending waves of alien invaders by shooting them while avoiding their projectiles.

## Project timeline. 
The class was given a month and a half to finish the project, but I was done within 20 days. I started early and was 80% done by the first checkup (this was where the professor would check on students' progress with the code every 2-3 weeks). Using this project, I showcase the following 
   * My technical skillset
   * Ability to learn fast
   * Ability to learn on my own
    
##  Technologies used.

1. Vanilla JavaScript 
    * Styling (Dark Mode Switch)
    * Loops (For & While)
    * Arrays (2D & 1D) 
    * ES6 Classes
    * Events (key presses, and collisions detections) 
    * Intervals & timeouts

2. HTML Canvas
    * This was where everything was rendered. 
3. SASS 
    * Used SCSS for styling

## Approach Taken
I started out by writing the ES6 classes where I would define my 3 objects( Invaders, missiles, and Spaceship). Once they were there, I moved the invader across the canvas. Then I caused it to come from the other side so that it could be seen as looping (I know this doesn't happen in the actual game, but we all like a little tweak). I then stored the invaders in an Array, replicating 10 times per line and Four of those lines to form a grid. Then I caused the spaceship to move 5 pixels when the user presses the arrow right or left key in the respective direction (this was done in the spaceship class). Then I worked on the missiles and their collision algorithms. Finally, worked on the game loop to run everything smoothly. 

## Wins and Blockers
### Wins
* I particularly enjoyed writing classes and functions to make these objects interact and move.
* I have gained extensive knowledge and a profound appreciation for programming in general.

### Blockers
* Another blocker was that we were not able to use any other JS frameworks and libraries because the project disallowed. 

## If I were to improve this game, I would consider implementing the following enhancements:

* Implement a feature where invaders drop their missiles in various patterns around the spaceship to creating a more engaging and challenging gameplay experience.
* Introduce a mechanism where both the invader and the spaceship can launch multiple missiles simultaneously, adding an extra layer of intensity and strategic decision-making to the game.
* Incorporate a gift box element that, when collected by the user upon collision, grants additional powers or upgrades, providing an incentive for players to actively pursue and collect these boxes.
* Include a toggle button that allows the player to switch between story mode and other gameplay modes, offering flexibility and customization in terms of the game's narrative and progression.

## Visuals 
[Play here](https://ohzecodes.github.io/spaceinvaders/)



