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
const categories = [...new Set(products.map((item)=>
  {return item}))]
  let i=0
document.getElementById('root').innerHTML = categories.map((item)=>
{
  let {image, title, price} = item;
  return(
    `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
    <div class ='bottom'>
    <p>${title}</p>
    <h2>$${price}.00</h2>`+
    "<button onclick ='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`
  )
}).join('')

let cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='margin:15px;'>${title}</p>
                <h2 style='font-size: 13px;'>$${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
