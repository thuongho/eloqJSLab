// chapter 2 
// ==== Looping a Triangle ====

// var pix = "#";
// for (var i = 1; i <= 7; i++) {
//   var pixByLine = [];
//   var counter = 0;
//   while (counter < i) {
//     pixByLine.push(pix);
//     counter++;
//   }
//   console.log(pixByLine.join(''));
// }

/* **** answer ****
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
*/


/* 
==== FizzBuzz ====
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5.
(This is actually an interview question that has been claimed to weed
out a significant percentage of programmer candidates. So if you solved it,
you’re now allowed to feel good about yourself.) 
*/

// var fizz = 3, buzz = 5;
// for (var i =1; i <= 100; i++) {
//   if (i % (fizz * buzz) === 0) {
//     console.log("FizzBuzz");
//   } else if (i % fizz === 0) {
//     console.log("Fizz");
//   } else if (i % buzz === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

/* **** answer ****
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
*/


/* 
==== Chess Board ==== 
Write a program that creates a string that represents an 8x8 grid, using new-
line characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.

When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting a
grid of the given width and height.
*/

// var size = 8,
//     pattern = "#",
//     printString = "";
// for (var h = 1; h <= size; h++) {
//   for (var w = 1; w <= size; w++) {
//     if (w == 1) {
//       pattern = pattern;
//     } else if (pattern !== "#") {
//       pattern = "#"
//     } else {
//       pattern = ' '
//     }
//     printString += pattern;
//   }
//   printString += "\n";
// }
// console.log(printString);

/* **** answer ****
var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);
*/