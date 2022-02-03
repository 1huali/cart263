/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let spyProfile = {
  name : `redacted`,
  alias : `redacted`,
  secretWeapon : `redacted`,
  password : `redacted`,
}

let currentUsername = ``;
let password = ``;
let secretWeapon = ``;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

spyProfile.name = prompt(`Type your name.`)
}


/**
Description of draw()
*/
function draw() {
background(255);

push();
textFont(`Courrier, monospace`);
textSize(24);
textAlign(TOP, LEFT);
text(spyProfile.name, 100, 100);
pop();
}
