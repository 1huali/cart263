/**
CAPTCHA (dog series)
Wawa Li

DIY CAPTCHA where images of fake dogs and real dogs are displayed. The user will authentify as human or bot depending on
if it can identify the real from the fake dog.
*/

"use strict";
// let state = 'main';
let clicks = 0;
// let botSquadImg = undefined;


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
  // botSquadImg = loadImage(`assets/images/bot.jpeg`);

}

/**
Create canvas, create animal and captcha objs and stored them into their global variable
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  window.alert('Click on the authentic dog to testify authentic human identity.         Five (5) trials allowed. BACKSPACE to refresh.');

  createAnimals();
  createCaptcha();
}

/**
Loads classes,
*/
function draw() {
  background(0);

  // if (state === `main`) {
    updateAnimals();
    captcha.update();
  }
  //   // if (state === `gotchu`) {
  //   //   end();
  //   // }}
  //
  // // }
  // }

  function mousePressed() {
    // console.log(mouseX, mouseY);
    captcha.mousePressed();

    clicks++;
    console.log(clicks);
    test();
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
      window.alert('WARNING : Amount of trials exceeded. Bot detected.');

      // goToNext();
    }
  }



  // function goToNext() {
  //   state = `gotchu`
  // }

  // function gotchu(){
  // window.alert('Back off');
  // push();
  // imageMode(CENTER);
  // image(botSquadImg);
  // pop();
  // }
