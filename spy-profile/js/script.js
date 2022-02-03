/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let spyProfile = {
  name: `redacted`,
  alias: `redacted`,
  secretWeapon: `redacted`,
  password: `redacted`,
}

let animalData = undefined;
let instrumentData = undefined;
let flowerData = undefined;

/**
Description of preload
*/
function preload() {
  animalData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/common.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  flowerData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/flowers.json`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // generateSpyProfile();

  let data = JSON.parse(localStorage.getItem(`spyProfileData`));
  // user enters the password that have been generated before, if not it generates a new profile
  if (data !== null) {
    let password = prompt(`Enter password`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
  } else {
    generateSpyProfile();
  }
}




function generateSpyProfile() {
  spyProfile.name = prompt(`Type your name.`)

  let animals = random(animalData.animals);

  spyProfile.alias = `The ${animals}`;
  spyProfile.secretWeapon = random(instrumentData.instruments);
  spyProfile.password = random(flowerData.flowers);

  // Will save profile when the page is loaded
  localStorage.setItem(`spyProfileData`, JSON.stringify(spyProfile));
}

/**
Description of draw()
*/
function draw() {
  background(255);

  let profile = `confidential data
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

  push();
  textFont(`Courrier, monospace`);
  textSize(24);
  textAlign(TOP, LEFT);
  fill(0);
  text(profile, 100, 100);
  pop();
}
