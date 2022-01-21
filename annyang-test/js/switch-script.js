/**
switch triggered with annyang librairy
Wawa Li

*/

"use strict";
let on = false;

function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      'bitch light': function() {
        on = true;
      },
      'lights off': function() {
        on = false;
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  background(0);

  if (on) {
    let r = random(100,255);
    background(r,0,0);
  } else{
    background(0);
  }
}
