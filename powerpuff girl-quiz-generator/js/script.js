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

let mood = `undefined`;
let animalEcho = undefined;

let characteristic = {
  type: `tbd`,
  form: `tbd`,
  element: `tbd`,
  name:`tbd`
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
  colorData = loadJSON (`https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/wikipedia.json`);
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
animalColor = JSON.parse(random(colorData.name));


if (annyang) {
  let commands = {
    'I promise': function() {
animalResponse = true;
    }
  };
  annyang.addCommands(commands);
  annyang.start();
}


  // let data = JSON.stringify(localStorage.getItem(`spyProfileData`));
  // // user enters the password that have been generated before, if not it generates a new profile
  // if (data !== null) {
  //   if (password === data.password) {
  //   setSpyProfile();
  //   }
  // } else {
  //   generateSpyProfile();
  // }
}


// function setAnimalProfile(){
  // characteristic.name = name;
//   characteristic.type = data.alias;
//   characteristic.form = data.secretWeapon;
//   characteristic.element = data.password;
// }


// function generateSpyProfile() {
//
//   // let animals = random(animalData.animals);
//
//   spyProfile.animal = `The ${animals}`;
//   spyProfile.characteristic.form = random(instrumentData.instruments);
//   spyProfile. = random(flowerData.flowers);
//
//   // Will save profile when the page is loaded
//   localStorage.setItem(`spyProfileData`, JSON.stringify(spyProfile));
// }


/**
Description of draw()
*/
function draw() {
  background(255);

  let profile = `This is ur new friend
Name: ${characteristic.name}
Form : ${animal}
Type : ${characteristic.type}
Element: ${characteristic.element}
Color : ${animalColor}
Now promise to take care of me forever. Say "I promise" and i'm yours.`;

if (animalResponse=== true){
  animalEcho.play();
  animalResponse === false;
}

  push();
  // textFont(`Courrier, monospace`);
  textSize(24);
  textAlign(TOP, LEFT);
  fill(0);
  text(profile, 100, 100);
  pop();

  // console.log(animalColor);
}
