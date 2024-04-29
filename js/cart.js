let cartBody = document.getElementById("cartBody");
let showCart = document.getElementById("cart");
let cartEmpty = document.getElementById("cartEmpty");
let cartTotal = document.getElementById("cartTotal");
let coupon="";
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let orderCompleted = document.getElementById("orderCompleted");
orderCompleted.setAttribute("disabled", "disabled");
displayCartUpdate();
function displayCartUpdate() {
  if (cartItems.length === 0) {
    cartItems = [];
    showCart.classList.replace("show", "hide");
    cartEmpty.innerHTML = `<h3 class="cart-empty">your cart is empty !</h3>`;
  } else {
    displayCart();
    displayTotal();
   calculateTotal();
    localStorage.setItem("cart", JSON.stringify(cartItems)); 
  }
}

function calculateTotal() { 
let couponState = JSON.parse(localStorage.getItem("coupon"));
  if (couponState == "applied"){
   let shipping =0;
  let subtotal= cartItems.reduce((previousValue , currentValue)=>{
   return (previousValue + (currentValue.price* currentValue.count))
  },0)
  let totalPrice= (subtotal/2)+ shipping;
couponAlert.classList.remove("coupon-alert")
subTotal.innerHTML = ` EGP${subtotal/2}`;
shippingValue.innerHTML = `free shipping`;
totalMoney.innerHTML = ` EGP${totalPrice}`
apply.innerHTML=`coupon applied <i class="fa-regular fa-face-smile-wink"></i>`
apply.setAttribute("disabled", "disabled");
  }else{ 
  let subTotal = document.getElementById("subTotal");
  let shippingValue = document.getElementById("shippingValue");
  let totalMoney = document.getElementById("totalMoney");
    let shipping =40;
  let subtotal= cartItems.reduce((previousValue , currentValue)=>{
   return (previousValue + (currentValue.price* currentValue.count))
  },0)

   let totalPrice= subtotal + shipping
  subTotal.innerHTML = ` EGP${subtotal}`
  shippingValue.innerHTML = ` EGP${shipping}`
  totalMoney.innerHTML = ` EGP${totalPrice}`}
  }




function displayCart() {

  let products = "";
  for (i = 0; i < cartItems.length; i++) {
    products += `
   <tr>
                <td>
                  <div class="row flex-nowrap">
                    <div class="cart-img-icon mt-3 ml-3" onclick="deleteItem(${cartItems[i].id})">
                      <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="col-xl-6 cart-img">
                 
                      <img src=${cartItems[i].image_link} onclick="viewPageDetails(${cartItems[i].id})" alt=${cartItems[i].name}>
                    </div>
                    <div class="col-xl-6 d-flex align-cartItems-center">
                      <h6 class="cart-title" onclick="viewPageDetails(${cartItems[i].id})">${cartItems[i].name}</h6>
                    </div>
                  </div>
 
                </td>
                <td>
                  <h6 class="mt-4 cart-price">${cartItems[i].price_sign}${cartItems[i].price}<h6>
                </td>  
                    <td>
          <div class="row mt-3">
            <div class="count-icon minus" onclick="setCount(${cartItems[i].id},'decrease')"><i class="fa-solid fa-minus"></i></div>
             <div class="count"><span>${cartItems[i].count}</span></div>
            <div class="count-icon plus" onclick="setCount(${cartItems[i].id},'increase')"><i class="fa-solid fa-plus"></i></div>
          </div>
        </td>
        </tr>
   `;
  }
  cartBody.innerHTML = products;
}

function setCount(id, condition) {
  let targetProduct = cartItems.find((element) => {
    return element.id === id;
  });
  if (condition == "increase" && targetProduct.count <= 100) {
    targetProduct.count++;
  } else if (condition == "decrease" && targetProduct.count > 1) {
    targetProduct.count--;
  } else {
    deleteItem(id);
  }
  displayCartUpdate();
  
  localStorage.setItem("cart", JSON.stringify(cartItems));
  couponAlert.classList.remove("coupon-alert")
}
function deleteItem(id) {
  cartItems = cartItems.filter((item) => {
    return item.id != id;
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCartUpdate();
  couponAlert.classList.remove("coupon-alert")
}


function displayTotal() {
  for (let i = 0; i < cartItems.length; i++) {
    let totalProducts = "";
    totalProducts += `<div class="cart-total-price">
  <h5 class="total">cart total</h5> 
  <ul class="shipping-info">
  <li class="shipping-item"><span>subtotal</span><span class="shipping-price " id="subTotal"></span></li>
  <li class="shipping-item"><span class="shipping-state">shipping</span><span  class="shipping-price " id="shippingValue"></span></li>
  <li class="shipping-item total-after-shipping"><span>total</span><span  class="shipping-price " id="totalMoney"></span></li>
  </ul>
  <div class="d-flex text-center justify-content-between">
  <a class="check-btn" href="check out.html">proceed to checkout</a>
  </div>
  <div class="coupon text-center">
  <h5 class="coupon-title"> <i class="fa-solid fa-ticket px-1"></i>coupon</h5>
  <input type="text"placeholder="coupon code" id="couponInput" class="coupon-code w-100">
  <div class="alert alert-danger" role="alert" id="couponAlert">
  invalid coupon code!
</div>
  <button class="coupon-btn  w-100" id="apply" onclick="applyCoupon()">apply coupon</button>
  <ul class="payment-ways">
    <li class="d-inline-block"><i class="fa-brands fa-cc-visa"></i></li>
    <li class="d-inline-block"><i class="fa-brands fa-cc-mastercard"></i></li>
  </div>
  </div>`;
    cartTotal.innerHTML = totalProducts;
   
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
 
}

function applyCoupon(){ 
let couponCode = "BF23".toLowerCase();
let apply = document.getElementById("apply");
  let couponAlert= document.getElementById("couponAlert");
 
  let subTotal = document.getElementById("subTotal");
  let shippingValue = document.getElementById("shippingValue");
  let totalMoney = document.getElementById("totalMoney");
    let shipping =0;
  let subtotal= cartItems.reduce((previousValue , currentValue)=>{
   return (previousValue + (currentValue.price* currentValue.count))
  },0)

  let totalPrice= (subtotal/2)+ shipping;

let couponInput = document.getElementById("couponInput");
  if (couponInput.value == couponCode){ 
    couponAlert.classList.remove("coupon-alert")
      subTotal.innerHTML = ` EGP${subtotal/2}`;
  shippingValue.innerHTML = `free shipping`;
  totalMoney.innerHTML = ` EGP${totalPrice}`
   apply.innerHTML=`coupon applied <i class="fa-regular fa-face-smile-wink"></i>`
  apply.setAttribute("disabled", "disabled");
  coupon="applied";
   localStorage.setItem("coupon", JSON.stringify(coupon))
  }else{
  couponAlert.classList.add("coupon-alert")
  }

  clearInp();
}
function clearInp() {
  couponInput.value = "";
}

couponAlert.classList.remove("coupon-alert")


