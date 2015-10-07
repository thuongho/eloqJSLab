// CHAPTER 3

/*
==== Minimum ====
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min
that takes two arguments and returns their minimum.
*/

// function minimum(num1, num2) {
//   if ((num1 !== "undefined") && (num1 < num2)) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

/*
**** Answer ****
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
*/


/*
==== Recursion ====
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to check whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even
or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?
*/

// function isEven(num) {
//   if (num === 0) {
//     return true;
//   } else if (num === 1) {
//     return false;
//   } else if (num < 0) {
//     return isEven(Math.abs(num));
//   } else {
//     return isEven(num - 2);
//   }
// }

/* 
**** Answer ****
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
*/


/* 
==== Bean Counting ====
You can get the Nth character, or letter, from a string by writing "string"
.charAt(N), similar to how you get its length with "s".length. The returned
value will be a string containing only one character (for example, "b"). The
first character has position zero, which causes the last one to be found at po-
sition string.length - 1. In other words, a two-character string has length 2,
and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and re-
turns a number that indicates how many uppercase “B” characters are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

// function oldCountBs(stringPhrase) {
//   var numBs = 0;
//   for (var i = 0; i < stringPhrase.length; i++) {
//     if (stringPhrase[i] === "B") {
//       numBs++;
//     }
//   }
//   return numBs;
// }

// function countChar(stringToCount, charToCount) {
//   var charCount = 0;
//   for (var i = 0; i < stringToCount.length; i++) {
//     if (stringToCount[i] === charToCount) {
//       charCount++;
//     }
//   }
//   return charCount;
// }

// function countBs(stringPhrase) {
//   return countChar(stringPhrase, "B");
// }

/*
**** Answer ****
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
*/