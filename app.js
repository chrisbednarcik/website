const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.enlargeable');
  const overlay = document.getElementById('overlay');
  const enlargedImage = document.getElementById('enlargedImage');

  images.forEach(image => {
      image.addEventListener('click', function() {
          enlargedImage.src = image.src;
          overlay.style.display = 'flex';
      });
  });

  overlay.addEventListener('click', function() {
      overlay.style.display = 'none';
  });
});