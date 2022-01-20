/**
annyang
Wawa Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      'hello': function() {
        alert(`hey`);
      },
      'goodbye': function() {
        alert(`miss U already`)
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}
  function draw() {
    background(0);
  }
