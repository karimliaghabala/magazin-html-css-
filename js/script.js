const searchForm = document.querySelector(".search-form");
const cartitemscontainer = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


//buttons
const searchBtn = document.querySelector("#search-btn");
const shoppingBtn = document.querySelector("#shopping-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(searchBtn)&&
        !e.composedPath().includes(searchForm)
        ){
        searchForm.classList.remove("active");
    }
    });
  
});


shoppingBtn.addEventListener("click", function() {
    cartitemscontainer.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(shoppingBtn)&&
        !e.composedPath().includes(cartitemscontainer)
        ){
        cartitemscontainer.classList.remove("active");
    }
    });
  
});

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(menuBtn)&&
        !e.composedPath().includes(navbar)
        ){
        navbar.classList.remove("active");
    }
    });
  
});


    