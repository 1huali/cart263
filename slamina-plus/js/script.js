/**
Pizza generator
Wawa Li

Project using Annyang and responsiveVoice librairies.
*/

"use strict";
// the humanoid service
let introSpeaking = true;
let showAlert = false;

// game states: game, bonus, end
let state = `game`;
let gameStarted = false;
let bgImg;
let popupImg;

let textColor;

// pizza toppings
const NUM_TOPPINGS = 25;
const pizzaToppings = [
  "anchovies",
  "artichoke",
  "bacon",
  "breakfast bacon",
  "Canadian bacon",
  "cheese",
  "chicken",
  "chili peppers",
  "feta",
  "garlic",
  "green peppers",
  "grilled onions",
  "ground beef",
  "ham",
  "hot sauce",
  "meatballs",
  "mushrooms",
  "olives",
  "onions",
  "pepperoni",
  "pineapple",
  "sausage",
  "spinach",
  "sun-dried tomato",
  "tomatoes"
];
let toppingList = [];
let toppingString;

let currentTopping = `What would U like?`;
let countdown = 1;
let score = ``;

/**
description of preload
*/
function preload() {
  bgImg = loadImage('assets/images/pizza.gif');
  popupImg = loadImage('assets/images/pop-up.gif');

}


/**
annyang
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  textColor = color(255);

  if (annyang) {
    let commands = {
      'Yes': function() {
        toppingList.push(currentTopping);
        console.log(toppingList);
        countdown = countdown - 1;
        // console.log(countdown);
        setTimeout(function() {
          reset();
        }, 1000)
        textColor = color(0, 255, 0);


      },
      'No': function() {
        textColor = color(255, 0, 0);
        setTimeout(function() {
          reset();
        }, 1000)
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

function game() {

  if (showAlert === false) {
    alert(`Hey bb tonite it's pizza we got 3 random toppings for free say yes/no to wtv OK c u later XO`)
    showAlert = true;
  }

  if (introSpeaking === true) {
    responsiveVoice.speak(currentTopping, 'Chinese Female', {
      pitch: -5,
      rate: 1.45
    });
    introSpeaking = false;
  }
  displayList();
  displayTopping();
  displayScore();
  toppingScore();

}

function toppingScore() {
  if (countdown < 0) {
    alert('U have reached your maximum topping. Add for 0,99$?');
    state = `bonus`
  }
}

//bonus state
function bonus() {
  // // console.log(state);
  // push();
  // imageMode(CENTER);
  // // console.log(popupImg);
  // image(popupImg, width / 2, height / 2);
  // pop();
  displayList();

  push();
  imageMode(CENTER);
  text("MESSAGE: Sorry too broke :'('", width /2, height / 2);
  pop();
}

//displays a random topping from the array list, and reverses the string thru reversedString().
function mousePressed() {
  if (state === `game`) {
    reset();
    gameStarted = true;
  } else if (state === `bonus`) {
    resetGame();
  }
}

// generates a new random topping
function reset() {
  textColor = color(255);

  let randomIndex = Math.floor(random(pizzaToppings.length));
  currentTopping = pizzaToppings[randomIndex];
  responsiveVoice.speak(currentTopping, 'French Female', {
    pitch: -5,
    rate: 1.45
  });
}

function displayScore() {
  push();
  fill(255);
  textSize(30);
  text(`${countdown+1} topping left`, width / 4 * 3, height / 4);
  pop();
}

function displayList() {
  let toppingString = toppingList.join(`, `);

  // Display the list of 'yes' items
  push();
  fill(255);
  textSize(20);
  text(toppingString, width / 2, height / 4);
  pop();
}

function displayTopping() {
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  if (gameStarted === false) {
    text(currentTopping, width / 2, height / 2);
  } else {
    text(`Would you like ${currentTopping} ?`, width / 2, height / 2);
  }
}


function displayImgBg() {
  push();
  imageMode(CENTER);
  image(bgImg, width / 2, height / 2);
  pop();
}


function resetGame() {
  countdown = 1;
  toppingList = [];
  state = `game`;
  currentTopping = `What would U like?`;
  introSpeaking = true;
  gameStarted = false;

  // reset();
}

function draw() {
  background(0);
  // game state
  if (state === `game`) {
    displayImgBg()
    game();
  } else if (state === `bonus`) {
    bonus();
    responsiveVoice.cancel();
  }
}
