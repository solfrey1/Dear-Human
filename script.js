document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  var header = document.querySelector('header');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
