/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as 
argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster?
*/

// const reverseArray = arr => {
//   let revArr = '';
//   for (let index of arr) {
//     revArr = index + revArr;
//   }
//   return revArr.split('');
// };
const reverseArray = arr => {
  let revArr = [];
  for (let index of arr) {
    revArr.unshift(index);
  }
  return revArr;
};

// const reverseArrayInPlace = arr => {
//   let lastElem = arr.length - 1;
//   for (let i = lastElem; i >= 0; i--) {
//     arr.push(arr[i]);
//   }
//   for (let i = 0; i <= lastElem; i++) {
//     arr.shift();
//   }
//   return arr;
// };
const reverseArrayInPlace = arr => {
  for (let i = 0, middle = Math.floor((arr.length - 1) / 2); i <= middle; i++) {
    let holder = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = holder;
  }
  return arr;
};

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
