let exit = document.querySelector(".close");

exit.addEventListener("click", disappear)
function disappear() {
  lightBox.classList.remove("light-box-block")
}
function viewProductsDetails(id) {
  window.scrollTo({
    top: 0
  })
  lightBox.classList.add("light-box-block")
  let product = productsContainer.find((element) => { return element.id == id })
  productsRow.innerHTML = `
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
       </div>
          <h6 class="curent">${product.currency}</h6>
          <h6 class="brand"> Brand : ${product.brand}</h6>
          <h6 class="brand"> Category : <span class="categ">${product.category}</span></h6>
          <div class="row justify-content-center mt-5"><button id="viewCart" class="view-cart d-none">view cart <i class="fa-solid fa-arrow-right"></i></button></div>
         <div class="row justify-content-center mt-4"> <button  class="best-btn add-btn p-2"  id="detailsBtn" onclick="AddToCart(${product.id})">add to cart</button></div>
      </div>
     </div>
   
    
     `
  if (product.description.length > 1) {
    let descriptions = document.getElementById("descriptions");
    let productDesc = "";
    for (let i = 0; i < product.description.length; i++) {
      productDesc += `<li class="desc">${product.description[i]}</li>`;

    }
    descriptions.innerHTML = productDesc
  }
  else {
    descriptions.innerHTML = `<li class="desc">${product.description}</li>`
  }
}