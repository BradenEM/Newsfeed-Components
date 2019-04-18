const toggleMenu = () => {
  menu.classList.toggle("menu--open");
  // Toggle the "menu--open" class on your menu refence.
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector("body .menu");
console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".header .menu-button");
console.log(menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", function() {
  toggleMenu();
});
