
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("header .nav");


hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("is-active");

    menu.classList.toggle("open");
});


const buttonOne = document.getElementById("button-1")
const buttonTwo = document.getElementById("button-2")
const buttonThree = document.getElementById("button-3")
const buttonFour = document.getElementById("button-4") 



buttonOne.addEventListener("click", showPopUp1)
buttonTwo.addEventListener("click", showPopUp2)
buttonThree.addEventListener("click", showPopUp3)
buttonFour.addEventListener("click", showPopUp4)



function showPopUp1(evt) {
    evt.preventDefault();
    closePopup ()
    document.getElementById("popup-1").style.display="flex"
    
} 

function showPopUp2(evt) {
    evt.preventDefault();
    closePopup ()
    document.getElementById("popup-2").style.display="flex"
} 

function showPopUp3(evt) {
    evt.preventDefault();
    closePopup ()
    document.getElementById("popup-3").style.display="flex"
} 

function showPopUp4(evt) {
    evt.preventDefault();
    closePopup ()
    document.getElementById("popup-4").style.display="flex"
} 

function closePopup () {
    document.getElementById("popup-1").style.display="none"
    document.getElementById("popup-2").style.display="none"
    document.getElementById("popup-3").style.display="none"
    document.getElementById("popup-4").style.display="none"
    
 }

 
 
    
 
