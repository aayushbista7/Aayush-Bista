// Get the hamburger menu icon and navbar links
const menuIcon = document.getElementById('menu-icon');
const navbarLinks = document.getElementById('navbar-links');

// Toggle the 'active' class when the hamburger menu is clicked
menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
