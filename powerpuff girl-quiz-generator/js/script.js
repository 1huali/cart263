/**
Pet Shop - adoption center
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
// let radio = undefined;
// let currentQuestion = `Which powerpuffGirl are U?`;
let animalData = `undefined`;
let colorData = `undefined`;
let animalColor = `undefined`;
let formData = `undefined`;
let animal = `undefined`;

let characteristic = {
  type: `tbd`,
  form: `tbd`,
  element: `tbd`
}
//
// let temperData = undefined;
// let weaknessData = undefined;
// let enjoymentData = undefined;

/**
Each ppgrl has 3 characteristic
*/
function preload() {
  animalData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/common.json`);
  formData = loadJSON(`assets/form.json`);
  colorData = loadJSON (`https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/wikipedia.json`);

  // radio = createRadio();
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // generateSpyProfile();

animal = random(animalData.animals);

let formAnimal = random(formData.animals);
characteristic.type = random(formAnimal.Type);
characteristic.form = random(formAnimal.Form);
characteristic.element = random(formAnimal.Element);
animalColor = random(colorData.name);




  // let data = JSON.stringify(localStorage.getItem(`spyProfileData`));
  // // user enters the password that have been generated before, if not it generates a new profile
  // if (data !== null) {
  //   let password = prompt(`Enter password`);
  //   if (password === data.password) {
  //   setSpyProfile();
  //   }
  // } else {
  //   generateSpyProfile();
  // }
}

// function setAnimalProfile(){
//   characteristic.name = data.name;
//   characteristic. = data.alias;
//   characteristic. = data.secretWeapon;
//   characteristic. = data.password;
// }


// function generateSpyProfile() {
//   // spyProfile.name = prompt(`Type your name.`)
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
Form : ${animal}
Type : ${characteristic.type}
Element: ${characteristic.element}
Color : ${animalColor}
  `;

  push();
  // textFont(`Courrier, monospace`);
  textSize(24);
  textAlign(TOP, LEFT);
  fill(0);
  text(profile, 100, 100);
  pop();

  // console.log(animalColor);
}
