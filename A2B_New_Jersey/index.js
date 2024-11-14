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



// --------------------------------------------------------------------------------------------------
// section - 3 image transition
document.addEventListener("DOMContentLoaded", function() {
    // Select both image elements
    const img1 = document.querySelector(".seceret-of-success-img-1");
    const img2 = document.querySelector(".seceret-of-success-img-2");

    // Define observer options
    const options = {
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if element is intersecting (in view)
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Unobserve to run only on first scroll
            }
        });
    }, options);

    // Observe the selected images
    observer.observe(img1);
    observer.observe(img2);
});


// --------------------------------------------------------------------------------------------------
// section - 4 [sec-1, sec-2, sec-3] transition.
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-4 .sub-section .menu-container .sec-1, .section-4 .sub-section .menu-container .sec-2, .section-4 .sub-section .menu-container .sec-3');
    
    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
            
            if (isInView && !section.classList.contains('in-view')) {
                section.classList.add('in-view'); // Add the class to trigger the transition
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if sections are already in view on page load
});


// --------------------------------------------------------------------------------------------------
// section - 6 image transition 
// Function to handle the scroll transition
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.img-col .image-container');

    function handleScroll() {
        const rect = imageContainer.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView && !imageContainer.classList.contains('in-view')) {
            imageContainer.classList.add('in-view'); // Add class to trigger the transition
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if the element is already in view on page load
});

// --------------------------------------------------------------------------------------------------
// section - 7 image transition 
// Function to handle the scroll transition
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.img-col .image-container');

    function handleScroll() {
        imageContainers.forEach(function(imageContainer) {
            const rect = imageContainer.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isInView && !imageContainer.classList.contains('in-view')) {
                imageContainer.classList.add('in-view'); // Add class to trigger the transition
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if the elements are already in view on page load
});


// --------------------------------------------------------------------------------------------------
// section - 8 Testimonial
// .testimonial-content, .testimonial-name - updating....
// --------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
        {
            content: `One of the best South-Indian restaurants in New Jersey! Amazing mini-tiffin and appams! Must try if you are around Edison area.
                      Service is quick and efficient. Loved the ambience and taste.`,
            name: `Shravankumar Hiregoudar`
        },
        {
            content: `One of the best South Indian taste! We really liked the food quality, taste and the prompt service. In spite of almost full capacity, food
                      was served in a short time. Thanks to the server Rajesh. Very polite and prompt service . A2B deserves 5 star. I am A happy customer for 
                      sure.`,
            name: `Suhas Biwalkar`
        },
        {
            content: `This restaurant is amazing! It has a lot of variety of food and you will be satisfied with everything that you eat. You can pick your
                      spice level and it will come accordingly. I personally love the Indochinese food that they have. Would recommend this place all the 
                      time if you are trying to have some great food.`,
            name: `Om Sonani`
        }
    ];

    const contentElement = document.querySelector('.section-8 .sub-section .testimonial-container .testimonial-content');
    const nameElement = document.querySelector('.section-8 .sub-section .testimonial-container .testimonial-name');
    const circleSpans = document.querySelectorAll('.section-8 .sub-section .testimonial-container .next-circle span');
    let currentIndex = 0;
    let interval;

    function updateTestimonial(index) {
        // Update content and name
        contentElement.textContent = testimonials[index].content;
        nameElement.textContent = testimonials[index].name;

        // Update active span indicator
        circleSpans.forEach((span, spanIndex) => {
            span.classList.toggle('active', spanIndex === index);   // toggle --- if(add-class ,true) else(remove-class, false)
        });

        // Update currentIndex
        currentIndex = index;
    }

    function startAutoRotation() {
        interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(nextIndex);
        }, 4000);
    }

    // Initialize display and auto-rotation
    updateTestimonial(currentIndex);
    startAutoRotation();

    // Event listeners for clicking on spans to manually navigate
    circleSpans.forEach((span, index) => {
        span.addEventListener('click', () => {
            clearInterval(interval); // Stop auto-rotation
            updateTestimonial(index); // Show the clicked testimonial
            startAutoRotation(); // Restart auto-rotation
        });
    });
});
