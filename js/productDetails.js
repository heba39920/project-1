let productsContainer=[];
let detailsRow = document.getElementById("detailsRow");
async function api(){
   let apiRequest=  await fetch("derma.json")
   let apiResponse = await apiRequest.json() 
 let products = apiResponse.products;

productsContainer=products;
displayDetails(products)
};
api();
function displayDetails(products){
let productId = JSON.parse(localStorage.getItem("productId"));
 let product = products.find((element)=>{return element.id == productId})
 detailsRow.innerHTML =`
     <div class="col-xl-6 col-md-6 col-sm-6">
     <div class="product-img">
      <img src= ${product.image_link} alt= ${product.name}>
     </div>
     </div>
     <div class="col-xl-6 col-md-6 col-sm-6">
      <div class="product-info">
        <h1 class="product-name">${product.name}</h1>
        <h4 class="price">${product.price_sign}${product.price}</h4>
         <ul id="descriptions">        
         </ul>
          <h6 class="curent">${product.currency}</h6>
          <h6 class="brand"> Brand : ${product.brand}</h6>
          <h6 class="brand"> Category : <span class="categ">${product.category}</span></h6>
          <div class="row justify-content-center mt-5"><button id="viewCart" class="view-cart d-none">view cart <i class="fa-solid fa-arrow-right"></i></button></div>
         <div class="row justify-content-center mt-4"> <button  class="best-btn add-btn p-2"  id="detailsBtn" onclick="AddToCart(${product.id})">add to cart</button></div>
      </div>
     </div>
   
    
     `
  if(product.description.length >1){
    let descriptions = document.getElementById("descriptions") ;
    let productDesc="";
    for (let i = 0; i < product.description.length; i++) {
       productDesc+= `<li class="desc">${product.description[i]}</li>` ;
  
    }
        descriptions.innerHTML= productDesc
  }
  else{
    descriptions.innerHTML = `<li class="desc">${product.description}</li>`
  }
  
}

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