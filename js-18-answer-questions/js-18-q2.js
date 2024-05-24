// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 15 },
  ];
const container=document.querySelector(".content");
const ulist=document.createElement("ul");
container.append(ulist);
function printPersons(persons){
    for (const person of persons) {
        const li=document.createElement("li");
        ulist.append(li);
        li.textContent=`name : ${person.name} , age : ${person.age}`;
    }
}
printPersons(persons);