let display = document.getElementById('display');
// making Array
// let buttons = Array.from(document.getElementsByClassName('button'));

// Or you can create a array with button
let buttons = document.querySelectorAll('.button');
let items = [];
for (let i = 0; i < buttons.length; i++) {
  items.push(buttons[i]);
}
// console.log(items);

items.forEach((button) => {
  button.addEventListener('click', (event) => {
    switch (event.target.innerText) {
      case 'C':
        display.innerText = '';
        break;
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error!';
        }
        break;
      default:
        display.innerText += event.target.innerText;
    }
  });
});
