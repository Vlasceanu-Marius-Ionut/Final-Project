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