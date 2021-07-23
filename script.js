var thumb = "👍🏻";
var thumbLine = "";
var thumbSquare = "";
var lineCount = 0;
var thumbTri = "";
var fist = "✊🏼";
var emojiOS = "";
var emojiMid = "";
var increment = 0;

// --- Number of Characters
// The user will enter a number of characters to display on the screen.

function emojiLine(number) {
  while (increment < number) {
    increment += 1;
    thumbLine = thumbLine + thumb;
  }
  // for (i = 0; i < number; i++) {
  //   thumbLine = thumbLine + thumb;
  // }
  return thumbLine;
}

// --- Square
// The user will enter the dimensions of a square to display on the screen.
// Use a loop within a loop and the <br> HTML tag in your output to create the square.

function emojiSquare(square) {
  while (lineCount < square) {
    lineCount += 1;
    for (i = 0; i < square; i++) {
      thumbSquare = thumbSquare + thumb;
    }
    thumbSquare = thumbSquare + "<br>";
  }
  return thumbSquare;
}

// --- Triangle
// The user will enter the dimensions of a triangle to display on the screen.‌
// Use a loop within a loop, a conditional and the <br> HTML tag in your output to create the triangle.

function emojiTri(stack) {
  while (lineCount < stack) {
    lineCount += 1;
    thumbTri = thumbTri + "<br>";
    for (i = 0; i < lineCount; i++) {
      thumbTri = thumbTri + thumb;
    }
  }
  return thumbTri;
}

// --- Outline Square
// The user will enter the dimensions of a square to display on the screen.
// The square is outlined by a different character.

function emojiOutline(width) {
  console.log("input: " + width);
  emojiOS = emojiLine(width);
  console.log(emojiOS);
  var smallBox = width - 2; // width of inner box
  console.log("inner height: " + smallBox);
  // if input is more than 1
  if (width > 1) {
    // create a square. for each iteration,
    for (midHeight = 0; midHeight < width; midHeight++) {
      // >>>>>>>> why is this not repeating the middle line??? it's repeating in console but not output??
      // if the inner box is more than 1
      if (smallBox > 1) {
        emojiMid = thumb + fist;
        console.log("emojiMid beginning: " + emojiMid);
        for (i = 0; i < smallBox - 1; i++) {
          // create the middle line
          emojiMid = emojiMid + fist;
        }
        // complete middle line
        emojiMid = emojiMid + thumb + "<br>";
        // repeat middle line as neccessary
        emojiMid += emojiMid;
      }
    }
    // console.log(emojiMid);
    emojiOS = emojiOS + "<br>" + emojiMid + emojiOS;
  }
  return emojiOS;
}

var main = function (input) {
  var myOutputValue = `line: <br>${emojiLine(
    input
  )} <br><br>outline: <br>${emojiOutline(input)}`;
  return myOutputValue;
};
