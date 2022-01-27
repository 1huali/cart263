/**
Pizza generator
Wawa Li

Project using Annyang and responsiveVoice librairies.
*/

"use strict";
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
let newToppingAdded = [];
let chosen = false;
let currentTopping = ``;

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

  // if (annyang) {
  //   let commands = {
  //     'Yes': function() {
  //       chosen = true;
  //     },
  //     'No': function() {
  //       chosen = false;
  //     }
  //   };
  //
  //   annyang.addCommands(commands);
  //   annyang.start();
  // }
}



//pushes the new chosen topping in list and prints in console
// function acceptProposition() {
//   if (chosen = true) {
//     currentTopping = topping.push();
//     console.log(newToppingAdded);
//   }
  // prints new topping to screen
// }

//displays a random topping from the array list, and reverses the string thru reversedString().
function mousePressed() {
  currentTopping = random(pizzaToppings);
  text(currentTopping, width / 2, height / 2);
  displayTopping();
  responsiveVoice.speak(currentTopping, 'UK English Male', {
    pitch: -5,
    rate: 1.45
  });
}

function displayTopping() {
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  pop();
}

/**
Description of draw()
*/
function draw() {
  background(0);

  // if (chosen = true){
  //   fill(0,255,0)
  // }
  //   else {
  //   fill(255,0,0)
  //   }
  //   text(currentAnswer, width/2,height/2);
}
