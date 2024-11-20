// --------------------------------------------------------------------------------
// changing the styles on scrolling - 20% from the top

document.addEventListener("DOMContentLoaded", function () {
  const scrollThreshold = window.innerHeight * 0.2;
  const navContainer = document.querySelector(".nav-container");
  const logo = navContainer.querySelector("img");
  const links = navContainer.querySelectorAll("ul li a");
  const orderButton = navContainer.querySelector(".orderButton");
  const dropDownIcon = orderButton.querySelector("i");

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      navContainer.classList.add("sticky");

      // Change link colors and button styles
      links.forEach((link) => (link.style.color = "#363636"));
      orderButton.style.color = "#363636";
      orderButton.style.backgroundColor = "transparent";

      sidebarIcon.style.marginRight = "10px";

      navContainer.style.padding = "0px";
      dropDownIcon.style.color = "#363636";

      // Adjust logo size
      logo.style.width = "129.99px";
      logo.style.height = "69.99px";
    } else {
      navContainer.classList.remove("sticky");
      // Reset link colors and button styles
      links.forEach((link) => (link.style.color = "#fff"));
      orderButton.style.color = "#fff";
      orderButton.style.backgroundColor = "#0571b9";

      navContainer.style.padding = "15px";
      dropDownIcon.style.color = "#fff";

      // Reset logo size
      logo.style.width = "109.99px";
      logo.style.height = "65.94px";
    }
  }

  // Listen for scroll event
  window.addEventListener("scroll", handleScroll);
});

// sidebar icon disablity
const sidebarIcon = document.querySelector(".sidebar-icon");
const crossX = document.querySelector(
  ".side-nav .side-nav-container .sideNav-image-cross p i"
);

const sideNav = document.querySelector(".side-nav-container");

sidebarIcon.addEventListener("click", () => {
  sideNav.style.display = "block";
  sideNav.style.position = "fixed"; // Make the sidebar fixed
  sideNav.style.top = "0"; // Align it to the top of the page
  sideNav.style.right = "0"; // Align it to the left side of the page
  sideNav.style.height = "100vh"; // Make the sidebar take the full height of the page
  sideNav.style.zIndex = "2000";
});

crossX.addEventListener("click", () => {
  sideNav.style.display = "none";
});

// -----------------------------------------------------------------------
// image transition - on first scroll [about-us container]
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".img-container img");

  function handleScroll() {
    const rect = image.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInView && !image.classList.contains("in-view")) {
      image.classList.add("in-view"); // Add class to trigger the transition
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check if the element is already in view on page load
});

// -----------------------------------------------------------------------
// Testimonial Transition - on first scroll
document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll(
			'.testimonial-part-2 .sec-1, .testimonial-part-2 .sec-2, .testimonial-part-2 .sec-3'
	);

	function handleScroll() {
			sections.forEach((section) => {
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
