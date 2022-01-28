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
// let toppingList = [];
// let chosenToppings = ;

let currentTopping = ``;
let countdown =  0;

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
  displayTopping();

  if (annyang) {
    let commands = {
      'Yes': function() {
        toppingList.push(currentTopping);
          console.log(toppingList);
          countdown= +1;
          console.log(countdown);

      },
      'No': function() {
        fill(255,0,0)
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}



//displays a random topping from the array list, and reverses the string thru reversedString().
function mousePressed() {
  currentTopping = random(pizzaToppings);
  responsiveVoice.speak(currentTopping, 'UK English Male', {
    pitch: -5,
    rate: 1.45
  });
}



function displayList() {
  push();
  fill(255);
  textSize(20);
  text(toppingList, width/2, height/4);
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
  displayTopping()
}
