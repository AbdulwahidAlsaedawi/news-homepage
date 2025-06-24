document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navList = document.querySelector('.nav_list');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  overlay.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navList.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  document.querySelectorAll('.nav_list a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navList.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});
