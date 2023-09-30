const Navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
   if (window.scrollY > 40) {
      Navbar.style.opacity = '0.98';
      Navbar.style.boxShadow = '4px 0 4px #000000';
   } if (window.scrollY < 40 || window.scrollY == 40) {
      Navbar.style.opacity = '1';
      Navbar.style.boxShadow = 'none';
   }
});
