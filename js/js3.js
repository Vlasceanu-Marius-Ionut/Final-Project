const products = [
  {
    Id: 0,
    image: './images/americano12.jpg',
    title: 'Americano',
    price: 7,
  },
  {
    Id: 1,
    image: './images/d-Frappuccino.jpg',
    title: 'Frappuccino',
    price:  12,
  },
  {
    Id: 2,
    image: './images/Falt-White.jpg',
    title: 'Falt-White',
    price: 10,
  },
  {
    Id: 3,
    image: './images/irish.jpg',
    title: 'Irish',
    price: 8,
  },
  {
    Id: 4,
    image: './images/latte.jpg',
    title: 'Latte',
    price: 8,
  },
  {
    Id: 5,
    image: './images/espresso.jpg',
    title: 'Espresso',
    price: 9,
  }
];

document.getElementById('root').innerHTML = products.map((item) => {
  let { Id, image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$${price}.00</h2>
        <button onclick='addtocart(${Id})'>Add to cart</button>
      </div>
    </div>`
  );
}).join('');

let cart = [];

function addtocart(productId) {
  const selectedProduct = products.find((item) => item.Id === productId);
  if (selectedProduct) {
    cart.push({ ...selectedProduct });
    displaycart();
  }
}

function delElement(index) {
  cart.splice(index, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  const cartItemsContainer = document.getElementById("cartItem");
  const totalPriceElement = document.getElementById("total");
  const totalPriceCart = document.getElementById("count");

  // Clear previous cart items
  while (cartItemsContainer.firstChild) {
    cartItemsContainer.removeChild(cartItemsContainer.firstChild);
  }

  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    totalPriceElement.innerHTML = "$" + 0 + ".00";
    totalPriceCart.innerHTML = "0"; // Reset the total count of items to 0
  } else {
    cart.forEach((item, index) => {
      let { image, title, price } = item;
      total = total + price;
      totalPriceElement.innerHTML = "$" + total + ".00";

      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");

      const rowImgDiv = document.createElement("div");
      rowImgDiv.classList.add("row-img");

      const imgElement = document.createElement("img");
      imgElement.classList.add("rowimg");
      imgElement.src = image;

      const titleElement = document.createElement("p");
      titleElement.style.margin = "15px";
      titleElement.innerText = title;

      const priceElement = document.createElement("h2");
      priceElement.style.fontSize = "13px";
      priceElement.innerText = "$" + price + ".00";

      const trashIcon = document.createElement("i");
      trashIcon.classList.add("fa-solid", "fa-trash");
      trashIcon.onclick = function () {
        delElement(index);
      };

      rowImgDiv.appendChild(imgElement);
      cartItemDiv.appendChild(rowImgDiv);
      cartItemDiv.appendChild(titleElement);
      cartItemDiv.appendChild(priceElement);
      cartItemDiv.appendChild(trashIcon);

      cartItemsContainer.appendChild(cartItemDiv);
    });

    totalPriceCart.innerHTML = cart.length; // Update the total count of items
  }
}

function Alert() {
  const cartItemsContainer = document.getElementById("cartItem");
  while (cartItemsContainer.firstChild) {
    cartItemsContainer.removeChild(cartItemsContainer.firstChild);
  }
  alert("Thank you for your purchase!");

  const totalPriceElement = document.getElementById('total');
  totalPriceElement.innerText = "$0.00";

  const totalPriceCart = document.getElementById('count');
  totalPriceCart.innerHTML = "0";

  cart = [];
  displaycart();
}
