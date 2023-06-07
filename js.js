const burgerMenu = document.querySelector('.burger-menu');
const menuOverlay = document.querySelector('.menu-overlay');

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

menuOverlay.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});


function addClickListenerToItems() {
  const itemClasses = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']; 

  itemClasses.forEach(itemClass => {
    const items = document.querySelectorAll(`.${itemClass}`);

    items.forEach(item => {
      item.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/CoffeeWorld1.html';
      });
    });
  });
}

addClickListenerToItems();

