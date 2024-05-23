const content = document.querySelector("#content");
const selection = document.createElement("select");
content.append(selection);
const option1 = document.createElement("option");
option1.innerText = "pick";
selection.append(option1);
const pElemnt = document.createElement("p");
content.append(pElemnt);
function listOfColours(colours) {
  // Write your code here...
  for (const iterator of colours) {
    const option = document.createElement("option");
    option.innerText = iterator;
    selection.append(option);
  }
  selection.addEventListener("change", (event) => {
    if (event.target.value != "pick") {
      pElemnt.innerText = `you have selected: ${event.target.value}`;
      pElemnt.style.color = event.target.value;
    }
  });
}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
