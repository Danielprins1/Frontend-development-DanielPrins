// JavaScript Document
console.log("hi");

//CodeMentor. (2023, 25 november). How to create responsive navigation bar with HTML CSS And JavaScript [Video]. YouTube. https://www.youtube.com/watch?v=M498DvQDkJo
var HamburgerMenu = document.querySelector('header > button');
var nav = document.querySelector('nav');

function MenuOpenen() {
    nav.classList.toggle('HamburgerMenuOpenen'); 

HamburgerMenu.addEventListener('click', MenuOpenen);

document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !HamburgerMenu.contains(event.target)) {
        nav.classList.remove('HamburgerMenuOpenen');
    }
});
