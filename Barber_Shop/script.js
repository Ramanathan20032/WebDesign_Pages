const menuBtn = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-nav");
const menu = document.getElementById('menu');

sideNav.style.right = "-250px"

menu.addEventListener('click', () => {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0px";
        menu.src = "Images/close.png"
        menu.style.width = "17px"
    }
    else{
        sideNav.style.right = "-250px"
        menu.src = "Images/menu.png"
        menu.style.width = "20px"
    }
})