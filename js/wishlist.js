let wishItems = JSON.parse(localStorage.getItem("wishItems")) || [];
let wishlistBody = document.getElementById("wishlistBody");
let wishlist = document.getElementById("wishlist");
let wishlistEmpty = document.getElementById("wishlistEmpty");
let popOver = document.getElementById("popOver");
function addToWishlist(id){
  let loginState = JSON.parse(localStorage.getItem("logedIn"));
    let favoriteProduct = productsContainer.find((item)=>{ return item.id==id});
    let addedProduct = wishItems.find((element)=> element.id== favoriteProduct.id);
    popOver.innerHTML=`<span>${favoriteProduct.name} has been added to wishlist !</span>`
   if(addedProduct){
    popOver.innerHTML=`<span class="text-center item-name">You will be redirected to Browse wishlist!</span>`
    popOver.classList.add("pop-over-visible")
       setTimeout(() => {
        popOver.classList.remove("pop-over-visible")
        window.location="wishlist.html"    
       }, 2000);
       
    }else if(loginState== null){
      window.location="login.html"
    } else{
        wishItems.push(favoriteProduct);
        popOver.classList.add("pop-over-visible")
        setTimeout(()=>{
          popOver.classList.remove("pop-over-visible")
        },2000)
    }
      
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
}
       function displayWishListUpdate() {
        if (wishItems.length === 0) {
          wishItems = [];
          wishlist.classList.replace("show", "hide");
          wishlistEmpty.innerHTML = `<h3 class="cart-empty">your wishlist is empty !</h3>`;
        } else {
          displayWishlist()
          localStorage.setItem("wishItems", JSON.stringify(wishItems));
        }
      }
  
  
       function displayWishlist() {
        let favProducts = "";
        for (i = 0; i < wishItems.length; i++) {
          favProducts += `
          <tr>
          <td>
            <div class="row flex-nowrap">
              <div class="cart-img-icon mt-3 ml-3" onclick="deleteItem(${wishItems[i].id})">
                <i class="fa-solid fa-xmark" ></i>
              </div>
              <div class="col-xl-6 cart-img">
                <img src=${wishItems[i].image_link} onclick="viewPageDetails(${wishItems[i].id})" alt=${wishItems[i].name} >
              </div>
           
            </div>
      
          </td>
          <td>
            
          </td>  
              <td>
      <div class="mt-4 text-end">
          <h6 class="wishlist-title" onclick="viewPageDetails(${wishItems[i].id})">${wishItems[i].name}</h6>       
      </div>
      </td>
      </tr>
         `;
        }
        wishlistBody.innerHTML = favProducts;
      }
        displayWishListUpdate() ; 
  
  
        function deleteItem(id) {
          wishItems = wishItems.filter((item) => {
            return item.id != id;
          });
          localStorage.setItem("wishItems", JSON.stringify(wishItems));
          displayWishListUpdate();
        }