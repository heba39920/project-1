let orderNumber = document.getElementById('orderNumber');
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
function displayCheckOut() {
    let couponState = JSON.parse(localStorage.getItem("coupon"));
    if (couponState == "applied") {
      if (cartItems.length > 1) {
        let productList = document.getElementById("productList");
        let productNames = "";
        for (let i = 0; i < cartItems.length; i++) {  
          let halfPrice=((cartItems[i].price * cartItems[i].count)/ 2)
          productNames += `<li><span>${cartItems[i].name} x${cartItems[i].count}</span> <span class="price-sign" >${cartItems[i].price_sign}${halfPrice}</span></li>`;
  
        }
        productList.innerHTML = productNames
      }
      else {
        productList.innerHTML = `<li><span>${cartItems[i].name} x${cartItems[i].count}</span> <span class="price-sign" >${cartItems[i].price_sign}${halfPrice}</span></li>`;
      }
      
    } else{
      if (cartItems.length > 1) {
      let productList = document.getElementById("productList");
      let productNames = "";
      for (let i = 0; i < cartItems.length; i++) {
        productNames += `<li><span>${cartItems[i].name} x${cartItems[i].count}</span> <span class="price-sign">${cartItems[i].price_sign}${(cartItems[i].price * cartItems[i].count )}</span></li>`;
  
      }
      productList.innerHTML = productNames
    }
    else {
      productList.innerHTML = `<li><span>${cartItems[i].name} x${cartItems[i].count}</span> <span class="price-sign">${cartItems[i].price_sign}${(cartItems[i].price * cartItems[i].count)}</span></li>`
    }
    }
    }
    function calculateTotal() {
        let couponState = JSON.parse(localStorage.getItem("coupon"));
        if (couponState == "applied") {
          let shipping = 0;
          let subtotal = cartItems.reduce((previousValue, currentValue) => {
            return (previousValue + (currentValue.price * currentValue.count))
          }, 0)
          let totalPrice= (subtotal/2)+ shipping;
          subTotal.innerHTML = ` EGP${subtotal/2}`;
          shippingValue.innerHTML = `free shipping`;
          totalMoney.innerHTML = ` EGP${totalPrice}`
        } else {
          let subTotal = document.getElementById("subTotal");
          let shippingValue = document.getElementById("shippingValue");
          let totalMoney = document.getElementById("totalMoney");
          let shipping = 40;
          let subtotal = cartItems.reduce((previousValue, currentValue) => {
            return (previousValue + (currentValue.price * currentValue.count))
          }, 0)
      
          let totalPrice = subtotal + shipping
          subTotal.innerHTML = ` EGP${subtotal}`
          shippingValue.innerHTML = ` EGP${shipping}`
          totalMoney.innerHTML = ` EGP${totalPrice}`
        }


}

      

       
      
    calculateTotal();
    displayCheckOut();
    
const baseID = "8655-001";
function updateUniqueIDs() {
  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].id = `${baseID}-${i + 1}`;
    orderNumber.innerHTML=`order number : #${cartItems[i].id}`;
localStorage.setItem('orderNumber',JSON.stringify(cartItems[i].id));
  }

}
updateUniqueIDs();
let orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click',()=>{
    localStorage.removeItem("cart")
    localStorage.removeItem("coupon")
    
    window.location = "products.html"

});