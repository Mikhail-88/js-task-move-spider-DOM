'use strict';

const wall = document.querySelector('.wall');

init(wall);

function init(field) {
  const spider = document.querySelector('.spider');
  const maxX = field.clientWidth - spider.offsetWidth;
  const maxY = field.clientHeight - spider.offsetHeight;

  field.addEventListener('click', (e) => {
    const fieldPosition = field.getBoundingClientRect();
    const fieldX = fieldPosition.left + field.clientLeft;
    const fieldY = fieldPosition.top + field.clientTop;
    let x = e.clientX - fieldX - spider.offsetWidth / 2;
    let y = e.clientY - fieldY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > maxY) {
      y = maxY;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}
