let logOutMenu = document.querySelector(".logOutMenu");
let usersData = JSON.parse(localStorage.getItem("users"));
let logOut = document.querySelector(".logOut");
let user = document.querySelector(".user");
let loginItem = document.querySelector(".loginItem");
let loginState = JSON.parse(localStorage.getItem("logedIn"));
if(loginState =="logedIn"){
    let existedUser = usersData.find(user => user)
      loginItem.classList.add("d-none");
    logOutMenu.classList.remove("d-none");
    user.innerHTML= ` Hi , ${existedUser.userName}`
    }
      logOut.addEventListener("click",()=>{
        loginItem.classList.remove("d-none");
        logOutMenu.classList.add("d-none")
        localStorage.removeItem("cart");
        localStorage.removeItem("logedIn");
        localStorage.removeItem("coupon")
        window.location='index.html';
    
      });
    









let targetProducts;
let element;
let categ;
  const categLinks = document.querySelectorAll(".shop-menu .shop-item");
  let filteredProducts= JSON.parse(localStorage.getItem("products"));
  categLinks.forEach((item)=>{
    item.addEventListener("click", (e)=>{
       categ = e.target.textContent.toUpperCase() ;
  localStorage.setItem("categ",JSON.stringify(categ))
      targetProducts= filteredProducts.filter((product)=>{
    for (let i = 0; i <product.category.length; i++) {
      element = product.category[i].toUpperCase() ;
    }
      return element === categ
   });
   filteredProducts=[...targetProducts]
  if(categ === "ALL PRODUCTS"){
  displayCategProducts(productsContainer)
  }else{
  displayCategProducts(filteredProducts)
  }
  window.location="category.html"
  })
  })
  


  function displayCategProducts(products){
    let items = "";
    for (let i = 0; i < products.length; i++) {
      items += ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div class="best-product-img">
    
        <div class="heart" onclick="addToWishlist(${products[i].id})">
       
        <i class="fa-solid fa-heart"></i>
        </div> 
        
         <img src=${products[i].image_link} onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view"  onclick="viewProductsDetails(${products[i].id})">quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class="text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
             <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add " onclick="addToCart(${products[i].id})">add to cart</button>
           </div>
         </div>
    </div>
     `
    }
   
 localStorage.setItem("categItems", JSON.stringify(items))
  }

