/* Recursion

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

*/

const isEven = n => {
  n = n * Math.sign(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
