/**
Pet Shop - adoption center
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let animalData = `undefined`;
let colorData = `undefined`;
let animalColor = `undefined`;
let formData = `undefined`;
let animal = `undefined`;
let name = `undefined`;
let animalResponse = false;
let secretData = undefined;

// let mood = `undefined`;
let animalEcho = undefined;

let characteristic = {
  type: `tbd`,
  form: `tbd`,
  element: `tbd`,
  name: `tbd`
}
//
// let temperData = undefined;
// let weaknessData = undefined;
// let enjoymentData = undefined;

/**
loads the
*/
function preload() {
  animalData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/common.json`);
  formData = loadJSON(`assets/form.json`);
  colorData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/wikipedia.json`);
  animalEcho = loadSound(`assets/sounds/bark.wav`)
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // generateSpyProfile();

  animal = random(animalData.animals);
  characteristic.name = prompt(`Type your name.`)

  let formAnimal = random(formData.animals);
  characteristic.type = random(formAnimal.Type);
  characteristic.form = random(formAnimal.Form);
  characteristic.element = random(formAnimal.Element);
  animalColor = random(colorData.name);
  // Q: not working animal color displays numerals


  if (annyang) {
    let commands = {
      'I promise': function() {
        animalResponse = true;
        tellMeUrSecret();
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  // // user enters the name he they have chosen for their animal before, if not it generates a new profile
  let data = localStorage.getItem(`secretData`);

  // if (name !== null) {
  //   if (name === data.secret) {
  //   setAnimalProfile();
  //   }
  // } else {
  //   generateSpyProfile();
  // }
}

function tellMeUrSecret(){
  secretData = prompt(`Tell me a secret.`)
  let secret = JSON.stringify(localStorage.getItem(`secretData`));
}
// function setAnimalProfile(){
// characteristic.name = data.name;
//   characteristic.type = data.type;
//   characteristic.form = data.form;
//   characteristic.element = data.element;
// }


// function generateSpyProfile() {
//
// animal = random(animalData.animals);
// characteristic.name = prompt(`Type your name.`)
//
// let formAnimal = random(formData.animals);
// characteristic.type = random(formAnimal.Type);
// characteristic.form = random(formAnimal.Form);
// characteristic.element = random(formAnimal.Element);
// animalColor = random(colorData.name);
// Q: not working animal color displays numerals

// how do we make the profile stay N remain??
//   // Will save profile when the page is loaded
//   localStorage.setItem(`guardianProfile`, JSON.stringify(characteristic));
// }

function displaySecret(){
  push();
  // textFont(`Courrier, monospace`);
  textSize(12);
  textAlign(TOP, LEFT);
  fill(0);
  text(secretData,100,400);
  pop();
}

function hideSecret(){
  push();
  // textFont(`Courrier, monospace`);
  textSize(12);
  textAlign(TOP, LEFT);
  fill(0);
  text(`safe now`,100,400);
  pop();
}

/**
Description of draw()
*/
function draw() {
  background(255);

  let guardian = `Hi, I am the guardian keeper of your secret.
Name: ${characteristic.name}
Form : ${animal}
Type : ${characteristic.type}
Element: ${characteristic.element}
Color : ${animalColor}
Now promise to take care of me forever. Say "I promise" and your secrets are safe with me.`;

  if (animalResponse === true) {
    console.log(animalResponse);
    // animalEcho.play();
    animalResponse === false;
    displaySecret();
    // setTimeout(hideSecret,3000)
}

  push();
  textSize(24);
  textAlign(TOP, LEFT);
  fill(0);
  text(guardian, 100, 100);
  pop();
}
