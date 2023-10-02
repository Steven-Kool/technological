const title = document.title;
const Body = document.getElementById('body');
const Navbar = `
<div class="navbar" id="navbar">
   <div class="logo-holder">
      <span style="margin-right: 18px; color: #E6304E">Luffy's</span><span style="color: rgb(20, 220, 255);">Center</span>
   </div>

   <div class="link-button-holder">
      <div class="link-holder">
         <div>
            <a href="/template/index.html">Home</a>
         </div>

         <div ${title == 'Courses' ? 'style="margin-bottom: -10px;"' : ''}>
            <a ${title == 'Courses' ? 'style="color: rgb(158, 158, 158)"' : 'href="/template/course.html"'}>Courses</a>
         </div>

         <div ${title == 'Time Table' ? 'style="margin-bottom: -10px;"' : ''}>
            <a ${title == 'Time Table' ? 'style="color: rgb(158, 158, 158)"' : 'href="/template/timetable.html"'}>Time Tables</a>
         </div>

         <div ${title == 'About Us' ? 'style="margin-bottom: -10px;"' : ''}>
            <a ${title == 'About Us' ? 'style="color: rgb(158, 158, 158)"' : 'href="/template/aboutus.html"'}>About Us</a>
         </div>
      </div>

      ${title == 'Register' ? '' : '<div class="button-holder"><a href="../template/register.html"><button>Register</button></div>'}   
   </div>
</div>
<div class="footer-holder" ${title == 'Register' ? 'style="position: absolute;"' : ''}>
   <div>
      @Copy right by Gusto University
   </div>

   <div>
      Luffy's Center
   </div>
</div>`;


Body.insertAdjacentHTML('beforeend', Navbar);

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
   if (window.scrollY > 40) {
      navbar.style.opacity = '0.98';
      navbar.style.boxShadow = '4px 0 4px #000000';
   } if (window.scrollY < 40 || window.scrollY == 40) {
      navbar.style.opacity = '1';
      navbar.style.boxShadow = 'none';
   }
});

// This is for About Us

const buttons = document.querySelectorAll('.radio');
const feedbackHolder = document.getElementById('rating-reaction');

const rating = (event) => {
   const rate = event.target.id;

   feedbackHolder.innerHTML = `<div>${rate}</div>`;
};

buttons.forEach((button) => {
   button.addEventListener('click', rating)
});
