// --------------------------------------------------------------------------------
// background image Switching

// Array of background images
const images = [
    'images/a2b-website-banner-1.jpg',
    'images/a2b-website-banner-2.jpg'
];

let currentImageIndex = 0; // start index with 0.

// To switch background image
function switchBackground() {
    // selecting the section element
    const section_2 = document.querySelector('.section-2');
    section_2.style.backgroundImage = `url(${images[currentImageIndex]})`;
    // Move to the next image in the array
    currentImageIndex = (currentImageIndex + 1) % images.length;
}
setInterval(switchBackground, 4000);    // change bachground for every 3s


// --------------------------------------------------------------------------------
// changing the styles on scrolling - 30% from the top

document.addEventListener('DOMContentLoaded', function() {
    const scrollThreshold = window.innerHeight * 0.2;
    const navContainer = document.querySelector('.nav-container');
    const logo = navContainer.querySelector('img');
    const links = navContainer.querySelectorAll('ul li a');
    const orderButton = navContainer.querySelector('.orderButton');
    const dropDownIcon = orderButton.querySelector('i')

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            navContainer.classList.add('sticky');

            // Change link colors and button styles
            links.forEach(link => link.style.color = '#363636');
            orderButton.style.color = '#363636';
            orderButton.style.backgroundColor = 'transparent';

            sidebarIcon.style.marginRight = "10px";

            navContainer.style.padding = '0px';
            dropDownIcon.style.color = "#363636"

            // Adjust logo size
            logo.style.width = '129.99px';
            logo.style.height = '69.99px';
        } else {
            navContainer.classList.remove('sticky');
            // Reset link colors and button styles
            links.forEach(link => link.style.color = '#fff');
            orderButton.style.color = '#fff';
            orderButton.style.backgroundColor = '#0571b9';

            navContainer.style.padding = '15px';
            dropDownIcon.style.color = "#fff"

            // Reset logo size
            logo.style.width = '109.99px';
            logo.style.height = '65.94px';
        }
    }

    // Listen for scroll event
    window.addEventListener('scroll', handleScroll);
});

// sidebar icon disablity
const sidebarIcon  = document.querySelector(".sidebar-icon");
const crossX = document.querySelector('.side-nav .side-nav-container .sideNav-image-cross p i')

const sideNav = document.querySelector(".side-nav-container");
    
sidebarIcon.addEventListener('click', () => {
    sideNav.style.display = "block";
    sideNav.style.position = "fixed"; // Make the sidebar fixed
    sideNav.style.top = "0"; // Align it to the top of the page
    sideNav.style.right = "0"; // Align it to the left side of the page
    sideNav.style.height = "100vh"; // Make the sidebar take the full height of the page
    sideNav.style.zIndex = "2000";
})

crossX.addEventListener('click', () => {
    sideNav.style.display = "none"
})
