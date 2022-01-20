/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
saying = undefined;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
background(255);

push();
textSize(22);
textAlign(CENTER);
text(saying, width/2, height/2);
pop();
}

function mousePressed(){
responsiveVoice.speak(phrase, 'UK English Male', {
  pitch:-5,
  rate:1.45,
  volume:1,
  onstart: showSpeaking,
  onend: hideSpeaking
});
}

function showSpeaking(){
  saying = phrase;
}

function hideSpeaking(){
  saying = ``
}
