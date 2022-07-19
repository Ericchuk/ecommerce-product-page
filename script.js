let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let contentBox = document.querySelector(".opac");
let modal = document.querySelector(".modal-container");
let modalImg = document.querySelector(".modal section img:first-child");
let checkOut = document.querySelector(".modal button");
let cart = document.querySelector(".cart");
let addToCart = document.querySelector(".addToCart");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let amount = document.querySelector(".amount");
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

 let a = 1;
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
    let dustBin = document.createElement("img");
    dustBin.setAttribute("src", "images/icon-delete.svg");
    let hasItem = false;
    cartItem.prepend(section);
    section.appendChild(img);
    section.appendChild(summary);
    summary.appendChild(p);
    summary.appendChild(span);
    summary.appendChild(span2);
    summary.appendChild(b);
    p.textContent = "Autumn Limited Edition...";
    span.textContent = `${this.parentElement.childNodes[7].childNodes[1].childNodes[1].textContent}`;
    span2.textContent = ` x ${a}`;
    let spanNumber = parseInt(span.textContent) * parseInt(a);

    b.textContent = `  $${spanNumber}.00`;
    section.appendChild(dustBin)
    console.log("000");
    // NOT REPETING OF PRODUUCT ALREADY IN CART BUT INCREASE FOR THAT SAME PRODUCT (HAVEN'T GOTTEN THE LOGIC YET)
    if(section.parentElement.childNodes.textContent == true){
        console.log(section.parentElement)
    }else{
        console.log("222")
    };
function del(){
    this.parentElement.style.display = "none";
    console.log("222");
}
dustBin.addEventListener("click", del);
}

addToCart.addEventListener("click", addToModal);



let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let boxImg = document.querySelectorAll(".big img");
let slideIndex = 1;
showSlides(slideIndex);

    // NEXT / PREVIOUS CONTROL
function plusBox(n){
    showSlides(slideIndex += n);
}
//     // IMAGE CONTROL
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    if(n > boxImg.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = boxImg.length
    }
    for(let i = 0; i < boxImg.length; i++){
        boxImg[i].style.display = "none";
    }
    boxImg[slideIndex-1].style.display = "block";
}


next.addEventListener("click", plusBox(1));
previous.addEventListener("click", plusBox(-1));
