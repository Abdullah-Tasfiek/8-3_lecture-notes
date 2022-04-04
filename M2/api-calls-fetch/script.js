const BASE_URL = "https://randomuser.me/api";

// create a function to display dom elements from the api response
const displayUser = (json) => {
  console.log(json);
  const [person] = results;

  const { title, first, last, email } = person.name;
  const { email } = person;

  console.log(title, first, last, email);

  //display the title, first name, lastname

  //display the profile photo

  //display the email
};
// create a function to display errors from the api response
const displayError = (error) => {
  console.log(error);
};
// Fetch data from base url using fetch and promises
fetch(BASE_URL)
  .then((res) => {
    return res.json();
  })
  .then(displayUser)
  .catch(displayError);
