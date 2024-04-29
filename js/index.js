let bestItems= document.getElementById("bestItems")
async function api() {
    let apiRequest = await fetch("derma.json");
    let apiResponse = await apiRequest.json();
    let products = apiResponse.products;
    displayBestItems(products);
    productsContainer = products;
  }
  api();
  
  function displayBestItems(products) {
    let items = "";
    for (let i = 23; i < products.length - 4; i++) {
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
     `;
    }
    bestItems.innerHTML = items;
  }
  