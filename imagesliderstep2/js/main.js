const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');
// console.dir(slider);
let sliderItem = slider.querySelectorAll('li');
// console.dir(sliderItem.length - 1);

const indicatorParent = document.querySelector('.control ul');
// const indicators = document.querySelectorAll('.control li');
let itemIndex = 0;

let indicators = document.querySelectorAll('.control li');
// console.dir(indicators);
indicators.forEach((indicator, ind) => {
  indicator.addEventListener('click', (e) => {
    itemIndex = ind;
    document.querySelector('.control .selected').classList.remove('selected');
    // or you can use below code for deleting .selected class
    /* removing .selected class
    indicators.forEach((indicator) => {
      indicator.classList.remove('selected');
    }); */

    // adding .selected class
    indicator.classList.add('selected');

    // moving slider
    slider.style.transform = 'translateX(' + ind * -200 + 'px)';
  });
});

left.addEventListener('click', function () {
  if (itemIndex == 0) return;
  itemIndex = itemIndex - 1;
  // or you can use above two line instead of below code
  // itemIndex = (itemIndex > 0) ? itemIndex - 1 : 0;

  // for selecting indicator at the same time
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[itemIndex].classList.add('selected');

  slider.style.transform = 'translateX(' + itemIndex * -200 + 'px)';
});

right.addEventListener('click', function () {
  // if (itemIndex == 4) return; // total items 7, visible items 3 for that (7-4) = 3

  itemIndex = itemIndex + 1;
  // console.log(itemIndex);
  // or you can use above two line instead of below code
  // index = index < 4 - 1 ? index + 1 : 3;
  // slider.style.transform = 'translateX(' + index * -25 + '%)';
  // console.log(itemIndex);
  if (itemIndex == 5) {
    itemIndex = 0;
  }

  // for selecting indicator at the same time
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[itemIndex].classList.add('selected');

  slider.style.transform = 'translateX(' + itemIndex * -200 + 'px)';
});
