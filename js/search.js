
let searchedProducts = document.querySelector(".searchedProducts");
let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".search-btn");
let searchBody = document.querySelector(".search-input");




function searchProductByName(keyword) {
 let  results = productsContainer.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
  if(results.length > 0){
    let container=""
    for(let i = 0 ; i < results.length; i++) {
    container += ` <tr class="my-2">
    <td class="p-2">
      <div class="row flex-nowrap">
        <div class="col-xl-6 cart-img ">
          <img class="border-round" src=${results[i].image_link} onclick="viewPageDetails(${results[i].id})" alt=${results[i].name} >
        </div>
     
      </div>
 
    </td>
           <td class="p-2">
 
    <h6 class="cart-title" onclick="viewPageDetails(${results[i].id})">${results[i].name}</h6>       
 
 </td>
    <td class="p-2">
    <h6>${results[i].price_sign}${results[i].price}<h6>
    </td>  
 
 </tr>`
     searchedProducts.innerHTML= container
  }
  searchBody.classList.add("search-done"); 
}else{
    searchedProducts.innerHTML=`Product Not Found`
    searchBody.classList.remove("search-done");   
  }
  
 };


    searchBtn.addEventListener("click", ()=>{     
            searchProductByName(searchInput.value.trim())  ;
             
    })
