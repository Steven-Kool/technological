const title = document.title;
const Body = document.getElementById('body');
const Navbar = `
<div class="navbar" id="navbar" ${title == 'Register' ? 'style="height: 70px"' : ''}>
   <div class="logo-holder">
      <span style="margin-right: 18px; color: #E6304E">Luffy's</span><span style="color: rgb(20, 220, 255);">Center</span>
   </div>

   <div class="link-button-holder" ${title == 'Register' ? 'style="flex: 1; margin: 0 0 0 100px"' : ''}>
      <div class="link-holder" ${title == 'Register' ? 'style="flex: 1; justify-content: space-around; margin: 0;"' : ''}>
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

// Submitting

const submitting = () => {
   const userName = document.getElementById('name');
   const email = document.getElementById('email');
   const number = document.getElementById('number');
   const male = document.getElementById('male');
   const female = document.getElementById('female');
   const type = document.getElementById('type');
   const checkbox = document.getElementById('checkbox');
   const formHolder = document.getElementById('formHolder');

   const userNameValue = userName.value.trim();
   const emailValue = email.value.trim();
   const numberValue = number.value.trim();

   const checking1 = () => {
      if (userNameValue === '' || emailValue === '' || numberValue === '') {
         return false;
      } else {
         return true;
      }
   }; 

   const checking2 = () => {
      if (!male.checked && !female.checked || !checkbox.checked) {
         return false;
      } else {
         return true;
      };
   };
   
   if (!checking1() || !checking2()) {
      const item = `
      <div class="alert">
         Please Fill all Fields
      </div>`;
   
      alertHolder.innerHTML = item;
   } else {
      result = `
      <div class="result-holder">
         <h1>My Profile</h1>
         <div style="font-size: 25px; font-weight: 500">I am <span style="font-weight: 600">${userNameValue}</span></div>
         <div style="font-size: 22px;">My Email is : <span style="font-weight: 600">${emailValue}</span></div>
         <div style="font-size: 22px;">Here is my Number <span style="font-weight: 600">${numberValue}</span></div>
         <div style="font-size: 22px;">I am <span style="font-weight: 600">${male.checked ? 'male' : 'female'}</span> and I am a <span style="font-weight: 600">${type.value == 'others' ? 'someone else' : type.value}</span></div>
      </div>`
      formHolder.innerHTML = '';
      formHolder.innerHTML = result;
   }   
};
