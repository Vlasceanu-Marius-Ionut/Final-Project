//BUTTON-FOR-CONTACT-SMOOTH-START
function toTheBottom() {
  const col1 = document.getElementById('col1');
  const col2 = document.getElementById('col2');

  col1.addEventListener('click', () => {
    col2.scrollIntoView({ behavior: "smooth" });
  });
}
//BUTTON-FOR-CONTACT-SMOOTH-END
//TO-SHOP-START//
function toShop() {
  const SHOP = document.getElementsByClassName('shop')[0];
  SHOP.addEventListener('click', () => {
    window.location.href = 'CoffeeWorldShop.html'
  });
}
//TO-SHOP-END//
