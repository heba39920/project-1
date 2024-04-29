let loginUserName = document.getElementById("loginUserName");
let loginPassword = document.getElementById("loginPassword");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let address = document.getElementById("address");
let addressInfo = document.getElementById("addressInfo");
let postCode = document.getElementById("postCode");
let orderNotes = document.getElementById("orderNotes");
let governorateSelection = document.getElementById("governorateSelection");
let loginForm = document.getElementById("loginForm");
let checkOutBody = document.getElementById("checkOutBody");
let errorAlert= Array.from(document.getElementsByClassName("alert"))
let orderCompleted = document.getElementById("orderCompleted");
  orderCompleted.setAttribute("disabled", "disabled");
let checkedValue = null;
const firstNameValidate = /^[a-zA-Z0-9_]{2,20}$/gm;
const lastNameValidate = /^[a-zA-Z0-9_]{2,20}$/gm;
const emailValidate =/^(?:[a-z0-9._%+-]+)@gmail\.com$/gm;
const phoneNumberValidate = /^(010|011|012|015)[0-9]{8}$/gm;
const streetNumberValidate= /^\d+$/gm;
const addressValidate = /^(?:[A-Za-z0-9\-/]+(?:\s|$)){1,}(?:[A-Za-z0-9\-/]+)$/gm;
let coupon="";
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let usersInfo = []; 
let logedIn= "";
let terms = document.getElementById("terms");
  let formCheckInput = [...document.querySelectorAll(".checkBox")];
  let placeOrderBtn = document.getElementById("placeOrder");
  placeOrderBtn.addEventListener("click", placeOrder)
function placeOrder() {
  for (let i = 0; i <formCheckInput.length; i++) {     
    if(formCheckInput[i].checked) {
    checkedValue= formCheckInput[i].value;
  }}
  let userInformation = {
  id: Date.now(),
  fName: firstName.value.trim(),
  lName: lastName.value.trim(),
  phoneNumber: phone.value.trim(),
  emailAddress: email.value.trim(),
  streetNumber: address.value.trim(),
  addressDetails: addressInfo.value.trim(),
  pCode: postCode.value.trim(),
  orderInfo: orderNotes.value.trim(),
  governorateSelection : governorateSelection.value.trim(),
  paymentWay:checkedValue
}
let loginState = JSON.parse(localStorage.getItem('logedIn'))
if((validation()== true)){
  let usersData = JSON.parse(localStorage.getItem("users"));
  let existedUser = usersData.find((element) => { return element.email == email.value.trim() && element.userName == firstName.value })
  if((existedUser) && (loginState=="logedIn") ){
    usersInfo.push(userInformation);
     localStorage.setItem("userInfo", JSON.stringify(usersInfo));
     if(checkUser()==true){window.location="order.html";}
      
    }else{
         window.location="login.html";
    }
} else{ 
  errorAlert.map((e)=>{
    e.classList.add("alert-block");
  });
  firstName.classList.add("is-invalid");
  lastName.classList.add("is-invalid");
  email.classList.add("is-invalid");
  phone.classList.add("is-invalid");
  address.classList.add("is-invalid");
  addressInfo.classList.add("is-invalid");
 
 }}












function validation(){
  if(( firstNameValidate.test(firstName.value)== true) && ( lastNameValidate.test(lastName.value)== true)&& ( emailValidate.test(email.value)== true)&& ( phoneNumberValidate.test(phone.value)==true)&&  ( streetNumberValidate.test(address.value)==true)&&(terms.checked == true)&&(governorateSelection.options.selectedIndex !==0)&& (checkedValue!==null)&&(addressValidate.test(addressInfo.value)== true) ){
    return true;
  }
  else{
    return false;
  }}



  

















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
    couponAlert.classList.remove("coupon-alert")
    subTotal.innerHTML = ` EGP${subtotal/2}`;
    shippingValue.innerHTML = `free shipping`;
    totalMoney.innerHTML = ` EGP${totalPrice}`
    apply.innerHTML=`coupon applied <i class="fa-regular fa-face-smile-wink"></i>`
    apply.setAttribute("disabled", "disabled");
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

function applyCoupon() {
  let couponState = JSON.parse(localStorage.getItem("coupon"));
  if (couponState == null) {
    let couponCode = "BF23".toLowerCase();
    let apply = document.getElementById("apply");
    let couponAlert = document.getElementById("couponAlert");
    let subTotal = document.getElementById("subTotal");
    let shippingValue = document.getElementById("shippingValue");
    let totalMoney = document.getElementById("totalMoney");
    let shipping = 0;
    let subtotal = cartItems.reduce((previousValue, currentValue) => {
      return (previousValue + (currentValue.price * currentValue.count))
    }, 0)
    let totalPrice = (subtotal / 2) + shipping;
    let couponInput = document.getElementById("couponInput");
    if (couponInput.value == couponCode) {
      couponAlert.classList.remove("coupon-alert")
      subTotal.innerHTML = ` EGP${subtotal / 2}`;
      shippingValue.innerHTML = `free shipping`;
      totalMoney.innerHTML = ` EGP${totalPrice}`
      apply.innerHTML = `coupon applied <i class="fa-regular fa-face-smile-wink"></i>`
      apply.setAttribute("disabled", "disabled");
      coupon = "applied";
      localStorage.setItem("coupon", JSON.stringify(coupon));
    } else {
      couponAlert.classList.add("coupon-alert");
    }
  }
  clearInp();
}
function clearInp() {
  couponInput.value = "";
}
couponAlert.classList.remove("coupon-alert");

























logIn.addEventListener("click", checkUser)
function checkUser() {
  let usersDetails= JSON.parse(localStorage.getItem("userInfo"));

  let usersData = JSON.parse(localStorage.getItem("users"));
  let existedUser = usersData.find((element) => { return element.userName == loginUserName.value.trim() && element.password == loginPassword.value })
  if (existedUser) {  
    logedIn = "logedIn"
    let loginState = JSON.parse(localStorage.getItem("logedIn"))
    if(loginState=="logedIn") { 
    let targetProduct= usersDetails.find((user)=>{ return  user.fName == loginUserName.value.trim();})
    firstName.value = targetProduct.fName;
    lastName.value= targetProduct.lName;
    phone.value =targetProduct.phoneNumber;
    email.value=targetProduct.emailAddress;
   address.value = targetProduct.streetNumber;
    addressInfo.value= targetProduct.addressDetails
   postCode.value =targetProduct.pCode;
   orderNotes.value=targetProduct.orderInfo
  governorateSelection.value=targetProduct.governorateSelection;
   checkedValue = targetProduct.paymentWay ;
   loginForm.classList.replace("d-block", "d-none");     
    }
  
  }else {
    loginAlert.classList.add("alert-block");
    loginUserName.classList.add("is-invalid");
    loginPassword.classList.add("is-invalid");

  }
return true;
}

displayCheckOut()
 calculateTotal()