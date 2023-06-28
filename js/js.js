//BURGER-START
const burgerMenu = document.querySelector('.burger-menu');
const menuOverlay = document.querySelector('.menu-overlay');

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

menuOverlay.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});
//BURGER-END

function ToSecondPage() {
  const secondpage = document.getElementsByClassName('contact')[0];
  secondpage.addEventListener('click', () => {
    window.location.href = 'CoffeeWorld1.html'
  });
}

ToSecondPage();


//FOR-BIGCONTAINERIMAGES-START
function addClickListenerToItems() {
  const itemClasses = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']; 

  itemClasses.forEach(itemClass => {
    const items = document.querySelectorAll(`.${itemClass}`);

    items.forEach(item => {
      item.addEventListener('click', (event) => {
        const targetPage = 'CoffeeWorld1.html';

        if (!isCurrentPage(targetPage)) {
          event.preventDefault();
          window.location.href = targetPage;
        }
      });
    });
  });
}

function isCurrentPage(pageName) {
  const currentPage = window.location.href;
  return currentPage.includes(pageName);
}

addClickListenerToItems();


function multiplyNumbers(a, b) {
  return a * b;
}

// Test1
let result = multiplyNumbers(2, 3);
let expected = 6;
console.log(result === expected, `Error: Result ${result} is not the expected value ${expected}`);

// Test2
result = multiplyNumbers(-5, 10);
expected = -50;
console.log(result === expected, `Error: Result ${result} is not the expected value ${expected}`);

// Test3
result = multiplyNumbers(-4, -2);
expected = 8;
console.log(result === expected, `Error: Result ${result} is not the expected value ${expected}`);
