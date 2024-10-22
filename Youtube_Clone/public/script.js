const menu_icon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menu_icon.addEventListener("click", () => {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
});
