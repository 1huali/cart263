/**
CAPTCHA (dog series)
Wawa Li

DIY CAPTCHA where images of fake dogs and real dogs are displayed. The human user will authentify if
it identifies the authentic dog.
*/

"use strict";

let clicks = 0;

let showImage = false;
let botSquad = undefined;
let confirmBox = false;

let dangerFX = undefined;
let barkFX = undefined;

const NUM_ANIMAL_IMG = 11;
const NUM_ANIMAL = 100;

let animalImgs = [];
let animals = [];

let captchaImg = undefined;
let captcha = undefined;


/**
Loading images, storing images in arrays, loads sounds
*/
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMG; i++) {
    let animalImage = loadImage(`assets/images/dog${i}.jpeg`);
    animalImgs.push(animalImage);
  }

  captchaImg = loadImage(`assets/images/captcha.jpeg`);
  botSquad = loadImage(`assets/images/bot.jpeg`);
  barkFX = loadSound(`assets/sounds/bark.wav`)
  dangerFX = loadSound(`assets/sounds/growl.wav`)

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  window.alert('MESSAGE: Please click on the image containing authentic dog. \n If there are none, click BACKSPACE. (5) trials allowed.');

//creation of animal and captcha objects
  createAnimals();
  createCaptcha();
}

/**
Loads classes into created variables
*/
function draw() {
  background(0);

  //stores animal, botSquad image and captcha objects-img into variables
  updateAnimals();
  captcha.update();
  if (showImage === true) {
    showBotSquadImg();
  }
  test();
}

function mousePressed() {
  captcha.mousePressed();


  clicks++;

//bark sounds every clicks
  barkFX.play();
}

//activates Refresh() function (below)
function keyPressed() {
  if (keyCode === 32) {
    refresh()
  }
}

//images and their location are randomized. Linked w Animal class
function createAnimals() {
  for (let i = 0; i < NUM_ANIMAL; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImgs);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }
}

//captcha's location is randomized. Linked w Captcha class
function createCaptcha() {
  let x = random(0, width);
  let y = random(0, height);
  captcha = new Captcha(x, y, captchaImg);
}

//animals displayed
function updateAnimals() {
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
}

//BACKSPACE to generate new set of random images
function refresh() {
  animals = [];
  for (let i = 0; i < NUM_ANIMAL; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImgs);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

  let x = random(0, width);
  let y = random(0, height);
  captcha = new Captcha(x, y, captchaImg);
}

//sets a maximum of clicks before the game ends
function test() {
  if (clicks > 4) {
    showImage = true;

    playDangerSound();
  }
}

//when the maximum of clicks is reached
function showBotSquadImg() {
  push();
  imageMode(CORNER);
  image(botSquad, 0, 0, width, height);
  pop();
  if (confirmBox === false) {
    confirmBox = true;
    setTimeout(function() {

      if (window.confirm('MESSAGE : ERROR. \n Anti-bot detection - Your previous CAPTCHA has been invalidated.')) {
        retry();
      }
    }, 1000);
  }
}

//when the user lost, it allows an other try and restarts the game
function retry() {
  clicks = 0;
  showImage = false;
  confirmBox = false;

  window.alert('MESSAGE: Please click on the image containing authentic dog. \n If there are none, click BACKSPACE. (5) trials allowed.');

  createAnimals();
  createCaptcha();
}

function playDangerSound() {
  dangerFX.play();
}
