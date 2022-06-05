let btn = document.getElementById('btn');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

leftBtn.addEventListener('click', () => {
  btn.style.left = '0';
  leftBtn.style.color = 'white';
  rightBtn.style.color = '#5f00d3';
});
rightBtn.addEventListener('click', () => {
  btn.style.left = '110px';
  // btn.style.left = '160px';
  rightBtn.style.color = 'white';
  leftBtn.style.color = '#5f00d3';
});
