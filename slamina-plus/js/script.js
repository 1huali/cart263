/**
Pizza generator
Wawa Li

Project using Annyang and responsiveVoice librairies.
*/

"use strict";
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
let toppingString

let currentTopping = ``;
let countdown = 3;
let score = ``;

/**
Description of preload
*/
function preload() {

}


/**
annyang
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  displayList();

  if (annyang) {
    let commands = {
      'Yes': function() {
        toppingList.push(currentTopping);
        console.log(toppingList);
        countdown = countdown - 1;
        console.log(countdown);
        reset();

      },
      'No': function() {
        // fill(255,0,0)à
        reset();
      }
    };
    annyang.addCommands(commands);
    annyang.start();

  }
}


// function toppingScore (){
//   if (countdown < 0){
//   alert('U have reached your maximum topping. Add for 0,99$?');
// }
// }



//displays a random topping from the array list, and reverses the string thru reversedString().
function mousePressed() {
  currentTopping = random(pizzaToppings);
  // new topping is said and printed on canvas
  responsiveVoice.speak(currentTopping, 'UK English Male', {
    pitch: -5,
    rate: 1.45
  });
  displayTopping();

}

function reset() {
  // pizzaToppings = [];
  for (let i = 0; i < NUM_TOPPINGS; i++) {
    currentTopping = random(pizzaToppings);

  }
}

  function displayScore() {
    push();
    fill(255);
    textSize(12);
    text(score, width / 4 * 3, height / 4);
    pop();
  }

  // function createList() {
  //   push();
  //   fill(255);
  //   textSize(20);
  //   text(toppingList, width/2, height/4);
  //   pop();
  // }

  function displayList() {
    let toppingsString = toppingList.join(`, `);
    // Display the string
    push();
    fill(255);
    textSize(20);
    text(toppingString, width / 2, height / 4);
    pop();
  }

  function displayTopping() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    textStyle(BOLD);
  }

  /**
  Description of draw()
  */
  function draw() {
    background(0);
    text(currentTopping, width / 2, height / 2);
    displayTopping();
    displayList();
    displayScore();
    // toppingScore();
  }
