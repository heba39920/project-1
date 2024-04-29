let cart = JSON.parse(localStorage.getItem("cart")) || [];
let badge = document.getElementById("badge");  

let cartPopOver= document.getElementById("cartPopOver");
window.addEventListener("load", function loading() {
  let loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
loader.classList.remove("loader"); 
   if(cart.length>0){
      badge.innerHTML= cart.length
    }else{
      badge.classList.add("badge-none");
    }
});  
 
  });




function addToCart(id) {
  let targetProduct = productsContainer.find((item)=>{ return item.id==id});
  cartPopOver.innerHTML=`<span>${targetProduct.name} has been added to cart !</span>`
  let chosenProduct = cart.find((element) => targetProduct.id == element.id);
  
  if (chosenProduct) {
    cartPopOver.innerHTML=`<span class="text-center item-name">You will be redirected to Browse cart!</span>`
    cartPopOver.classList.add("pop-over-visible")
       setTimeout(() => {
        cartPopOver.classList.remove("pop-over-visible")
        window.location = "cart.html";  
       }, 2000);
  } else {
    cart.push({ ...targetProduct, count: 1 });
    cartPopOver.classList.add("pop-over-visible")
    setTimeout(()=>{
      cartPopOver.classList.remove("pop-over-visible")
    },2000)

       if(cart.length>0){
      badge.innerHTML= cart.length
    }else{
      badge.classList.add("badge-none");
    }
 
  }; 
  localStorage.setItem("cart", JSON.stringify(cart));
};




function AddToCart(id){
  let detailsBtn = document.getElementById("detailsBtn"); 
  let viewCart = document.getElementById('viewCart');
  detailsBtn.innerHTML=` Add to cart
 <div class="loader-background">
 <div class="spinner-border text-light" role="status">
 <span class="visually-hidden">Loading...</span>
</div>
 </div>`
    setTimeout(()=>{
      detailsBtn.classList.add("d-none");
      viewCart.classList.remove("d-none");
    },2000)
   
    viewCart.addEventListener("click",()=>{
      window.location="cart.html"
    });
    let targetProduct = productsContainer.find((item)=>{ return item.id==id});
    let chosenProduct = cart.find((element) => targetProduct.id == element.id);
    let addBtn = Array.from(document.querySelectorAll(".add"));
    let checkBtn = addBtn.map((element) => {
      if (element.innerHTML = "add to cart") { 
        return true;
      }
    })
    if (chosenProduct) {
      if (checkBtn == true) {
        chosenProduct.count++; 
      }
    } else {
      cart.push({ ...targetProduct, count: 1 });
         if(cart.length>0){
        badge.innerHTML= cart.length
      }else{
        badge.classList.add("badge-none");
      }
    };
    localStorage.setItem("cart", JSON.stringify(cart));
  }



function viewPageDetails(id) {
  localStorage.setItem("productId", id);
  window.location = "../product details.html"

}















