
 let categProducts =document.getElementById("categProducts");

let categName = document.getElementById("categName");

let categTitle = JSON.parse(localStorage.getItem("categ"));
   categName.innerHTML = categTitle;


categProducts.innerHTML= JSON.parse(localStorage.getItem("categItems"));

let productsContainer = JSON.parse(localStorage.getItem("products"));













