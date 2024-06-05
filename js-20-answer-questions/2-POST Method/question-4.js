// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const usersAdd = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */
async function postData() {
  for (const user of usersAdd) {
    await fetch("https://6660162e5425580055b21863.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
}
postData();
//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
async function AddPerson(firstN, lastN, phoneNum) {
  const add = { firstName: firstN, lastName: lastN, phoneNumber: phoneNum };
  const data = await axios.post(
    "https://6660162e5425580055b21863.mockapi.io/users",
    add
  );
  
}
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#fName").value;
  const lastName = document.querySelector("#lName").value;
  const phoneNumber = document.querySelector("#pNum").value;
  AddPerson(event.target.fName.value, lastName, phoneNumber);
  form.reset();
});
