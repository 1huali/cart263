/**
Pet Shop - adoption center
Author Name

this uncanny pet shop generates a guardian for your secrets. One pet can take care of one secret.
*/

"use strict";
let animalData = `undefined`;
let colorData = `undefined`;
let animalColor = `undefined`;
let formData = `undefined`;
let animal = `undefined`;
let name = `undefined`;

// let animalResponse = false;
let secretData = undefined;
let hideSecret = false;
let secretExposed = false;

// let mood = `undefined`;
let animalEcho = undefined;

let characteristic = {
  type: `tbd`,
  form: `tbd`,
  element: `tbd`,
  name: `tbd`,
  animalColor: `tbd`,
  animal: `tbd`,
  secret: `tbd`,
  password: `tbd`
}
let guardianProfile = null;
let passedVerification = false;
// more ideas or characteristics
// let temperData = undefined;
// let weaknessData = undefined;
// let enjoymentData = undefined;

/**
loads the json lists
*/
function preload() {
  animalData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/common.json`);
  formData = loadJSON(`assets/form.json`);
  colorData = loadJSON(`assets/Colors.json`);
  //https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/wikipedia.json
  // animalEcho = loadSound(`assets/sounds/bark.wav`)
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // localStorage.removeItem('guardianData');

  // user enters the name he they have chosen for their animal before, if not it generates a new profile
  // Will save profile when the page is loaded
  if (localStorage.getItem(`guardianData`) === null) {
    setGuardianProfile();
    passedVerification = true;
  }
  // to add a new secret or display the list.
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
}

function tellMeUrSecret() {
  secretData = prompt(`Tell me a secret.`)
  //let secret = JSON.stringify(localStorage.getItem(`secretData`));
  guardianProfile.secret = guardianProfile.secret + "," + secretData;
  localStorage.setItem('guardianData', JSON.stringify(guardianProfile));
}

function setGuardianProfile(){
let animal = random(formData.animals);
let animalColor = random(colorData.animalColors);


characteristic.name = prompt(`PET SHOP SERVICE: Hi. Type a name for you new guardian.`)
characteristic.animal = random(animalData.animals);
characteristic.type = random(animal.Type);
characteristic.form = random(animal.Form);
characteristic.element = random(animal.Element);
characteristic.animalColor = animalColor.name;
characteristic.secret = "";
localStorage.setItem(`guardianData`, JSON.stringify(characteristic));
guardianProfile = characteristic;
}

function testGuardianName() {
  let testName = prompt(`Type your guardian's name.`)
  guardianProfile = JSON.parse(localStorage.getItem(`guardianData`));

  if (testName === guardianProfile.name) {
    console.log(guardianProfile);
    passedVerification = true;
  } else {
    passedVerification = false;

  }
}

function displaySecret() {
  push();
  // textFont(`Courrier, monospace`);
  textSize(12);
  textAlign(TOP, LEFT);
  fill(0);
  if (hideSecret === false) {
    let splitSecrets = guardianProfile.secret.split(",");
    for (let i = 1; i < splitSecrets.length; i++) {
      text(splitSecrets[i], 100 + (i * 15), 400);
    }

  } else {
    text(`This secret is safe with me now`, 100, 400);

  }

  pop();
}

// function showSecretList (){

// }

/**
Description of draw()
*/
function draw() {
  background(255);

  if (passedVerification) {
    let guardian = `Hi, I am the guardian keeper of your secret.
Name: ${guardianProfile.name}
Form : ${guardianProfile.animal}
Type : ${guardianProfile.type}
Element: ${guardianProfile.element}
Color : ${guardianProfile.animalColor}
Now promise to take care of me forever. Say "I promise" and your secrets are safe with me.`;

    if (animalResponse === true) {
      console.log(animalResponse);
      // Q: why animal only plays when mousePressed? and why it has to be in draw cos the music is glitchy
      // animalEcho.play();
      animalResponse = false;
      secretExposed = true;
      setTimeout(function() {
        hideSecret = true;
      }, 3000)
    }

    if (secretExposed === true) {
      displaySecret();
    }
    push();
    textSize(24);
    textAlign(TOP, LEFT);
    fill(0);
    text(guardian, 100, 100);
    pop();
  } else {
    testGuardianName();
  }
}
