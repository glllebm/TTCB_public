// Shared behaviors: mobile hamburger menu open/close.
document.addEventListener('DOMContentLoaded', function () {
  var page = document.querySelector('.page');
  if (!page) return;

  var openBtns = document.querySelectorAll('[data-menu-open]');
  var closeBtns = document.querySelectorAll('[data-menu-close]');

  function lockScroll(on) {
    document.body.style.overflow = on ? 'hidden' : '';
    document.documentElement.style.overflow = on ? 'hidden' : '';
  }

  openBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      page.classList.add('menu-open');
      lockScroll(true);
    });
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      page.classList.remove('menu-open');
      lockScroll(false);
    });
  });
});
