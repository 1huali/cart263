/**
Bubble popper
Wawa Li

Handpose librairy exercice - usr can pop bubbles detected with hand detection
*/

"use strict";
//the bubble
let bubble = undefined;

// the handpose model
let handpose = undefined;
let video = undefined;
//Q: could we call let video; without undefined?
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
  }, function() {
    console.log(`model loaded.`)
  });

  // stores hand detected as results in predictions array
  handpose.on('predict', function(results) {
    console.log(results);
    predictions = results;
  });
  // bubbles
  push();
  bubble = {
    x: random(width),
    y: random(height),
    size: 100,
    vx: 0,
    vy: -2
  }
  pop();
}


/**
Description of draw()
*/
function draw() {
  background(0);

  //ensures there is something happenign when a hand is detected
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    // i dont udnerstand shit but seems to identify tipsNbase of the index representing the pin
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];
    // body pin
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();
    // pin head
    push();
    noStroke();
    fill(255, 30, 250);
    ellipse(baseX, baseY, 20);
    pop();

    // bubble checking
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  // move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  // reset bubble to the bottom
  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0, 100, 205);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}
