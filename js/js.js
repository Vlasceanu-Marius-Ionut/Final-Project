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
    window.location.href = 'http://127.0.0.1:5500/indexs/CoffeeWorld1.html'
  });
}

ToSecondPage();


//FOR-BIGCONTAINERIMAGES-START
function addClickListenerToItems() {
  const itemClasses = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']; 

  itemClasses.forEach(itemClass => {
    const items = document.querySelectorAll(`.${itemClass}`);

    items.forEach(item => {
      item.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/indexs/CoffeeWorld1.html';
      });
    });
  });
}
//FOR-BIGCONTAINERIMAGES-END

//BUTTON-FOR-CONTACT-SMOOTH-START
function toTheBottom() {
  const col1 = document.getElementById('col1');
  const col2 = document.getElementById('col2');

  col1.addEventListener('click', () => {
    col2.scrollIntoView({ behavior: "smooth" });
  });
}

toTheBottom();
//BUTTON-FOR-CONTACT-SMOOTH-END
