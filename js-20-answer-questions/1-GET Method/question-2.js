/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
async function getData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getData();