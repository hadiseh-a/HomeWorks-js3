/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
function sum(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 > 0 && num2 > 0) resolve(num1 + num2);
      else reject("wrong number, it should be positive");
    },500);
  });
}
sum(4, 6)
  .then((data) => console.log(data))
  .catch((erorr) => console.error(erorr));
