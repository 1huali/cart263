/**
Bubble popper
Wawa Li

Handpose librairy exercice - usr can pop bubbles detected with hand detection
*/

"use strict";
let bubbles;

// the handpose model
let handpose = undefined;
let video = undefined;
//Q: could we call let video; without undefined?
let thumb;
let index;
let predictions = [];


/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);

  //access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //setting handpose model
  // q: not calling it CONST?
  handpose = ml5.handpose(video, {
      flipHortizontal: true,
    },  function() {
      console.log(`model loaded.`)
    });

// stores hand detected as results in predictions array
  handpose.on('predict', function(results){
    console.log(results);
    predictions = results;
  });
}


/**
Description of draw()
*/
function draw() {

}
