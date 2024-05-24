// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.

const numbers = [1, 2, 3, 4, 5];
const callbackfilter = (number) => {
  if (number > 2) return number;
};
function simulateFilter(numbers, callback) {
    let newNumbers=[];
  for (const iterator of numbers) {
    if(callback(iterator))
    newNumbers.push(callbackfilter(iterator));
  }
  return newNumbers;
}
const evenNumbers = simulateFilter(numbers, callbackfilter);
console.log(evenNumbers); //>>> [3, 4, 5]
