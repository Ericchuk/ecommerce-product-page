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
let sup = document.querySelector("nav sup")

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

let digit = 0;
function addToModal(){
    
    cartItem.style.paddingTop = "0px";
    cartItem.style.height = "auto"
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
    // let hasItem = false;
    cartItem.prepend(section);
    section.appendChild(img);
    section.appendChild(summary);
    summary.appendChild(p);
    summary.appendChild(span);
    summary.appendChild(span2);
    summary.appendChild(b);
    p.textContent = "Autumn Limited Edition...";
    span.textContent = `${this.parentElement.parentElement.childNodes[7].childNodes[1].childNodes[1].textContent}`;
    span2.textContent = ` x ${a}`;
    let spanNumber = parseInt(span.textContent) * parseInt(a);
    b.textContent = `  $${spanNumber}.00`;
    section.appendChild(dustBin);
    console.log(cartItem.childElementCount - 1);
    let number =  cartItem.childElementCount - 1;
    sup.textContent = number;
    // NOT REPETING OF PRODUUCT ALREADY IN CART BUT INCREASE FOR THAT SAME PRODUCT (HAVEN'T GOTTEN THE LOGIC YET)
    if(section.parentElement.childNodes.textContent == true){
        console.log(section.parentElement)
    }else{
        // console.log("222")
    };
function del(){
    this.parentElement.style.display = "none";
    // number = cartItem.childElementCount - 2;
    
    if(number === 1){
        number = 0;
        // cartItem.style.height = "100px";
        // cartItem.textContent = "Your cart is empty";
        // cartItem.style.paddingTop = "90px"
        console.log(number)
    }
    sup.textContent = number--;
    // console.log("222");
}
dustBin.addEventListener("click", del);
}

addToCart.addEventListener("click", addToModal);



let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let boxImg = document.querySelectorAll(".big img");
let smallImg = document.querySelectorAll(".thumbnail img");
// let slideIndex = 1;
// showSlides(slideIndex);


//     // NEXT / PREVIOUS CONTROL
//     // DIDN'T WORK, YOU CAN HELP REVIEW
// function plusBox(n){
//     showSlides(slideIndex += n);
// }
// //     // IMAGE CONTROL
// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     if(n > boxImg.length){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex = boxImg.length
//     }
//     for(let i = 0; i < boxImg.length; i++){
//         boxImg[i].style.display = "none";
//     }
//     boxImg[slideIndex-1].style.display = "block";
// }


// next.addEventListener("click", plusBox(1));
// previous.addEventListener("click", plusBox(-1));



boxImg[0].style.display = "block";
boxImg[1].style.display = "none";
boxImg[2].style.display = "none";
boxImg[3].style.display = "none";
smallImg[0].style.border = "2px solid var(--h3andcta)";
smallImg[0].style.opacity = ".5";

function showImg1(){
    boxImg[0].style.display = "block";
    boxImg[1].style.display = "none";
    boxImg[2].style.display = "none";
    boxImg[3].style.display = "none";
    smallImg[0].style.border = "2px solid var(--h3andcta)";
    smallImg[0].style.opacity = ".5";
    smallImg[2].style.border = "none";
    smallImg[2].style.opacity = "10";
    smallImg[1].style.border = "none";
    smallImg[1].style.opacity = "10";
    smallImg[3].style.border = "none";
    smallImg[3].style.opacity = "10";
}

function showImg2(){
    boxImg[1].style.display = "block";
    boxImg[0].style.display = "none";
    boxImg[2].style.display = "none";
    boxImg[3].style.display = "none";
    smallImg[1].style.border = "2px solid var(--h3andcta)";
    smallImg[1].style.opacity = ".5";
    smallImg[0].style.border = "none";
    smallImg[0].style.opacity = "10";
    smallImg[2].style.border = "none";
    smallImg[2].style.opacity = "10";
    smallImg[3].style.border = "none";
    smallImg[3].style.opacity = "10";
}

function showImg3(){
    boxImg[2].style.display = "flex";
    smallImg[2].style.border = "2px solid var(--h3andcta)";
    smallImg[2].style.opacity = ".5";
    smallImg[0].style.border = "none";
    smallImg[0].style.opacity = "10";
    smallImg[1].style.border = "none";
    smallImg[1].style.opacity = "10";
    smallImg[3].style.border = "none";
    smallImg[3].style.opacity = "10";
    boxImg[1].style.display = "none";
    boxImg[0].style.display = "none";
    boxImg[3].style.display = "none";
}

function showImg4(){
    boxImg[3].style.display = "block";
    boxImg[2].style.display = "none";
    boxImg[0].style.display = "none";
    boxImg[1].style.display = "none";
    smallImg[3].style.border = "2px solid var(--h3andcta)";
    smallImg[3].style.opacity = ".5";
    smallImg[0].style.border = "none";
    smallImg[0].style.opacity = "10";
    smallImg[1].style.border = "none";
    smallImg[1].style.opacity = "10";
    smallImg[2].style.border = "none";
    smallImg[2].style.opacity = "10";
}

smallImg[0].addEventListener("click", showImg1);
smallImg[1].addEventListener("click", showImg2);
smallImg[2].addEventListener("click", showImg3);
smallImg[3].addEventListener("click", showImg4);

// ENLARGE ON CLICKING MAIN IMG 

let modalForEnlarge = document.querySelector(".modalForImageEnlarge");
let modalContent = document.querySelector(".modal-content");
let modalClose = document.querySelector(".modal-close")
let modalSmall = document.querySelectorAll(".modalThumbnail img")
for(let i = 0; i < boxImg.length; i++){
    function enlarge(){
    modalForEnlarge.style.display = "block";
    modalContent.src = this.src;
}
    function smallToEnlarge(){
        modalContent.src = this.src;
        modalSmall[i].style.opacity = ".6";
        modalSmall[i].style.border = "2px solid var(--h3andcta)"
    }
    modalSmall[i].addEventListener("click", smallToEnlarge)
    boxImg[i].addEventListener("click", enlarge);
}

function closeModalEnlarge(){
    modalForEnlarge.style.display = "none"
}

modalClose.addEventListener("click", closeModalEnlarge);



// FOR NEXT AND PREVIOUS DISPLAY 

let imgItems = [
    {
        id: "1",
        path :{
           src : "images/image-product-1.jpg"
        }
    },
    {
        id: "2",
        path :{
            src : "images/image-product-2.jpg"
         }
    },
    {
        id: "3",
        path :{
            src : "images/image-product-3.jpg"
         }
    },
    {
        id: "4",
        path :{
            src : "images/image-product-4.jpg"
         }
    }
]

let slideIndex2 = 1;
let img1 = document.querySelector(".img1")
img1.src = imgItems[slideIndex2].path.src;
function plus2(){
    if(slideIndex2 >= imgItems.length){
        slideIndex2 = 0;
   }else{
       img1.src = imgItems[slideIndex2++].path.src;
       console.log(img1)
   }
}
function minus2(){
    if(slideIndex2 < 0){
         slideIndex2 = 3;
    }else{
        img1.src = imgItems[slideIndex2--].path.src;
        console.log(img1)
    }
}

next.addEventListener("click", plus2);
previous.addEventListener("click", minus2);






