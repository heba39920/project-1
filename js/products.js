let sectOne = document.getElementById("sectOne");
 let sectTwo = document.getElementById("sectTwo");
 let sectThree = document.getElementById("sectThree");
 let sectFour = document.getElementById("sectFour");
 let sectFive = document.getElementById("sectFive");
 let sectSix = document.getElementById("sectSix");
 let productsContainer=[];
 async function api(){
    let apiRequest=  await fetch("derma.json")
    let apiResponse = await apiRequest.json() 
  let products = apiResponse.products;

displaySectOne(products);
displaySectTwo(products);
displaySectThree(products);
displaySectFour(products);
displaySectFive(products);
displaySectSix(products);
productsContainer=products;
localStorage.setItem("products", JSON.stringify(products))
};

api()

 function displaySectOne(products){
    let productListOne ="";
    for(let i=0; i<products.length-27; i++){
      productListOne+=
      ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div  class="best-product-img">
            <div class="heart" onclick="addToWishlist(${products[i].id})">
         <i class="fa-solid fa-heart"></i>
       </div> <img src=${products[i].image_link}  onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view" onclick="viewProductsDetails(${products[i].id})">quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class= "text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
             <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add"   id ="AddBtn" onclick="addToCart(${products[i].id}) " >add to cart</button>
           </div>
         
         </div>
    </div>`
    
    }

    
  sectOne.innerHTML= productListOne

 };
 function displaySectTwo(products){
    let productListTwo ="";
    for(let i=4; i<products.length-23; i++){
      productListTwo+=
      ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div class="best-product-img">
            <div class="heart" onclick="addToWishlist(${products[i].id})">
         <i class="fa-solid fa-heart"></i>
       </div> <img src=${products[i].image_link}  onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view" onclick="viewProductsDetails(${products[i].id})"  >quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class= "text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
             <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add"   id ="AddBtn"onclick="addToCart(${products[i].id})">  add to cart  </button>
           </div>
         </div>
    </div>`
    
    }
    
  sectTwo.innerHTML=  productListTwo

 };
 function displaySectThree(products){
    let productListThree ="";
    for(let i=8; i<products.length-14; i++){
        productListThree+=
      ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div class="best-product-img">
            <div class="heart" onclick="addToWishlist(${products[i].id})">
         <i class="fa-solid fa-heart"></i>
       </div> <img src=${products[i].image_link}  onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view" onclick="viewProductsDetails(${products[i].id})"  >quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class= "text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
             <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add"   id ="AddBtn"onclick="addToCart(${products[i].id})">  add to cart  </button>
           </div>
         </div>
    </div>`
    
    }
    
  sectThree.innerHTML=  productListThree

 };
 function displaySectFour(products){
    let productListFour ="";
    for(let i=17; i<products.length-8; i++){
        productListFour+=
      ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div class="best-product-img">
            <div class="heart" onclick="addToWishlist(${products[i].id})">
         <i class="fa-solid fa-heart"></i>
       </div> <img src=${products[i].image_link}  onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view" onclick="viewProductsDetails(${products[i].id})"  >quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class= "text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
             <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add"   id ="AddBtn"onclick="addToCart(${products[i].id})">  add to cart  </button>
           </div>
         </div>
    </div>`
    
    }
    
    sectFour.innerHTML=  productListFour

 };
 function displaySectFive(products){
    let productListFive ="";
    for(let i=23; i<products.length-4; i++){
        productListFive+=
      ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div class="best-product-img">
            <div class="heart" onclick="addToWishlist(${products[i].id})">
         <i class="fa-solid fa-heart"></i>
       </div> <img src=${products[i].image_link}  onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view" onclick="viewProductsDetails(${products[i].id})"  >quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class= "text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
             <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add"   id ="AddBtn"onclick="addToCart(${products[i].id})">  add to cart  </button>
           </div>
         </div>
    </div>
    `
    }
    
    sectFive.innerHTML=  productListFive


 };
 function displaySectSix(products){
    let productListSix ="";
    for(let i=27; i<products.length; i++){
        productListSix+=
      ` <div class="col-xl-3 col-md-6 col-sm-6">
      <div class="best-product">
        <div class="best-product-img">
            <div class="heart" onclick="addToWishlist(${products[i].id})">
         <i class="fa-solid fa-heart"></i>
       </div> <img src=${products[i].image_link}  onclick="viewPageDetails(${products[i].id})" alt=${products[i].name}>
         <button id="viewDetails" class="best-btn w-100 view" onclick="viewProductsDetails(${products[i].id})"  >quick view</button>
        </div>
         <div class="best-product-prop text-center">
           <h5 class= "text-capitalize" onclick="viewPageDetails(${products[i].id})">${products[i].name}</h5>
           <div class="rate mb-2">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
   
           </div>
               <h6 class="price">${products[i].price_sign}${products[i].price}</h6>
             <button  class="best-btn add"   id ="AddBtn"onclick="addToCart(${products[i].id} )">  add to cart  
             </button>
           </div>
         </div>
    </div>

    `
    
    }
    
    sectSix.innerHTML=  productListSix

 };




 





     