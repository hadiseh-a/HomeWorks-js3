//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
async function findAndDelete(firstName, lastName) {
  const { data } = await axios.get(
    "https://6660162e5425580055b21863.mockapi.io/users"
  );
  for (const user of data) {
    if (user.firstName === firstName && user.lastName === lastName)
      await axios.delete(
        "https://6660162e5425580055b21863.mockapi.io/users/" + user.id
      );
  }
}
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
// for (let i = 0; i < usersAdd.length; i++) {
//   findAndDelete(usersAdd[i].firstName,usersAdd[i].lastName);
// }
//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
async function DeleteEvens() {
  try {
    const { data } = await axios.get(
      "https://6660162e5425580055b21863.mockapi.io/users"
    );
    for (const user of data) {
      console.log(user.id/2);
      if (user.id%2===0)
        await axios.delete(
          "https://6660162e5425580055b21863.mockapi.io/users/" + user.id
        );
    }
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}
DeleteEvens();
//*End of story :)
