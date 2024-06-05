//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

async function putData(firstN, lastN, phoneNum,id) {
  const data = { firstName: firstN, lastName: lastN, phoneNumber: phoneNum };
  await axios.put("https://6660162e5425580055b21863.mockapi.io/users/"+id,data)
}
putData("Lufy","monkey. D","(945) 635-3854",1)
//*To be continue...
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#fName").value;
  const lastName = document.querySelector("#lName").value;
  const phoneNumber = document.querySelector("#pNum").value;
  const id=document.querySelector("#id").value;
  putData(event.target.fName.value, lastName, phoneNumber,id);
  form.reset();
});