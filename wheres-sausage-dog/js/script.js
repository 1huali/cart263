/**
CAPTCHA (dog series)
Wawa Li

DIY CAPTCHA where images of fake dogs and real dogs are displayed. The user will authentify as human or bot depending on
if it can identify the real from the fake dog.
*/

"use strict";
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
}

/**
Create canvas, create animal and captcha objs and stored them into their global variable
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

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
  // console.log(Captcha);

}


/**
Loads classes,
*/
function draw() {
  background(0);

  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  captcha.update();
  // captcha.doubleClicked();
}

function mousePressed() {
  // refresh();
  console.log(mouseX,mouseY);

  captcha.mousePressed();
}

// function keyPressed (){
//   if (asdkna){
//     refresh();
//   }
// }

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
