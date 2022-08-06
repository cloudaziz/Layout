/* let form = document.getElementById('form');
let username = document.getElementById('Username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
}); */

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
console.dir(password);

const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (name.value == '' || name.value == null) {
    messages.push('Name is required');
  }

  if (password.value.length <= 6) {
    messages.push('password less then 6 letter.');
  }

  if (password.value.length >= 9) {
    messages.push('password is grater 9 number');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
    // console.log(messages);
  }
  //   console.dir(messages);
});
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(1, -1));
// console.log(animals);
