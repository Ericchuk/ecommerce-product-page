let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let contentBox = document.querySelector(".opac");
let modal = document.querySelector(".modal-container");
let modalImg = document.querySelector(".modal section img:first-child");
let shoeDescription = document.querySelector(".description");
let priceTag = document.querySelector(".price-tag");
let dustBin = document.querySelector(".modal section img:last-child");
let checkOut = document.querySelector(".modal button");
let cart = document.querySelector(".cart");
let addToCart = document.querySelector(".addToCart");
let modalValue = "Autumn Limited Edition...";
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let amount =document.querySelector(".amount");
let cartItem = document.querySelector(".cartItems");

console.log(cartItem);
function openHamburger(){
    if(contentBox.style.display === "block"){
        contentBox.style.display = "none";
        hamburger.style.display = "block"
    }else{
        contentBox.style.display = "block"
        // hamburger.style.display = "none"
    }
}

hamburger.addEventListener("click", openHamburger);
close.addEventListener("click", openHamburger);

function openCart(){
    if(modal.style.display === "block"){
        modal.style.display = "none"
    }else{
        modal.style.display = "block"
    }
    // console.log(cart)
}

cart.addEventListener("click", openCart);

 let a = 0;
function increase(){
    a++;
    amount.innerHTML = a;
}

plus.addEventListener("click", increase);

minus.addEventListener("click", () => {
    if(a > 0){
        a--;
        amount.innerHTML = a;
    }
})

function addToModal(){
    let section = document.createElement("section");
    let img = document.createElement("img");
    img.setAttribute("src", `images/image-product-1-thumbnail.jpg`)
    let summary = document.createElement("summary");
    let p = document.createElement("p");
    p.className = "shoe description"
    let span = document.createElement("span");
    span.className = "price-tag"
    let span2 = document.createElement("span");
    span2.className = "number"
    let b = document.createElement("b");
    b.className = "totals"
}

addToModal();