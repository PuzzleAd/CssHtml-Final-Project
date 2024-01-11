const burger_menu = document.querySelector(".Burger_Menu");
const burge_menu_block = document.querySelector(".burger_menu");
const x = document.querySelector(".Burger_Menu_X");

burger_menu.addEventListener("click", irakli);
x.addEventListener("click", irakli);

function irakli() {
    burge_menu_block.classList.toggle("appear");
    burger_menu.classList.toggle("vanish");
    x.classList.toggle("x_appear");
}
