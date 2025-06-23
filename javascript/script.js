document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navList = document.querySelector('.nav_list');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // Toggle menu
  menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    navList.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav_list a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navList.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});