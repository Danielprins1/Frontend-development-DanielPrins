// JavaScript Document
console.log("hi");

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
