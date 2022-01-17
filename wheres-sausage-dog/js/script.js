/**
CAPTCHA (dog series)
Wawa Li

DIY CAPTCHA where images of fake dogs and real dogs are displayed. The user will authentify as human or bot depending on
if it can identify the real from the fake dog.
*/

"use strict";

let clicks = 0;

let showImage = false;
let botSquad = undefined;
let confirmBox =false;

let dangerFX = undefined;

const NUM_ANIMAL_IMG = 11;
const NUM_ANIMAL = 100;

let animalImgs = [];
let animals = [];

let captchaImg = undefined;
let captcha = undefined;


/**
Loading images, storing obj in arrays
*/
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMG; i++) {
    let animalImage = loadImage(`assets/images/dog${i}.jpeg`);
    animalImgs.push(animalImage);
  }

  captchaImg = loadImage(`assets/images/captcha.jpeg`);
  botSquad = loadImage(`assets/images/bot.jpeg`);
  dangerFX = loadSound(`assets/sounds/bark.wav`)

}

/**
Create canvas, create animal and captcha objs and stored them into their global variable
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  window.alert('Click on the authentic dog to testify your human identity.                  Five (5) trials allowed. BACKSPACE to refresh.');

  createAnimals();
  createCaptcha();
}

/**
Loads classes,
*/
function draw() {
  background(0);

  updateAnimals();
  captcha.update();
  if (showImage===true){
    showBotSquadImg();

  }
}

function mousePressed() {
  // console.log(mouseX, mouseY);
  captcha.mousePressed();

  clicks++;
  test();

  dangerFX.play();
}

function keyPressed() {
  if (keyCode === 32) {
    refresh()
  }
}


function createAnimals() {
  for (let i = 0; i < NUM_ANIMAL; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImgs);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }
}

function createCaptcha() {
  let x = random(0, width);
  let y = random(0, height);
  captcha = new Captcha(x, y, captchaImg);
  // console.log(Captcha);
}


function updateAnimals() {
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
}

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

function test() {
  if (clicks > 5) {
    showImage = true;

    playDangerSound();
  }
}

function showBotSquadImg(){
  console.log("RETRY");
  push();
  imageMode(CORNER);
  image(botSquad, 0, 0, width,height);
  pop();
if(confirmBox ===false){
    confirmBox =true;
  setTimeout(function(){

    if (window.confirm('MESSAGE : WARNING !!!! n\ Your previous CAPTCHA has been invalidated.'))
    {
      retry();
    }
  },1000);
}
}

function retry(){
  clicks=0;
  showImage=false;
  confirmBox =false;

  window.alert('MESSAGE: Please click on the image containing authentic dog. n\ (5) trials allowed. n\ If there are none, click BACKSPACE.');

  createAnimals();
  createCaptcha();
}

function playDangerSound() {
  dangerFX.play();
}
