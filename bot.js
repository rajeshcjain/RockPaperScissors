const Enum = require("enum");

const myEnum = new Enum({ Rock: 0, Paper: 1, Scissor: 2 });

/*
The same thing could have been done using an array.
allOptions = ["rock","paper","scissor"];

get the random number from 0 to 2 and then get the index from the array.That is more simplar way of implementing it.

*/

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getBotResponse() {
  let res = between(0, 3);

  console.log("The input is " + res);

  switch (myEnum.get(res).value) {
    case myEnum.Rock.value:
      console.log("the input is Rock " + myEnum.get(res).value);
      return "rock";
    case myEnum.Paper.value:
      console.log("the input is Paper " + myEnum.get(res).value);
      return "paper";
    case myEnum.Scissor.value:
      console.log("the input is Scissor " + myEnum.get(res).value);
      return "scissor";
    default:
      return "";
  }
}

module.exports = { getBotResponse };
