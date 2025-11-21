let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar2');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');  
  navbar.classList.toggle('active');  
};


window.addEventListener('load', () => {
  const paragraph = document.querySelector('.hero-content p');
  setTimeout(() => {
    paragraph.classList.add('show');  // triggers the fade-in animation
  }, 200);  // optional delay for smooth effect
});
