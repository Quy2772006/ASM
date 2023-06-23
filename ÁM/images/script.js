var navbar = document.querySelector('.navbar');
var scrollPrev = window.pageYOffset;

window.addEventListener('scroll', function() {
  var scrollCurrent = window.pageYOffset;

  if (scrollPrev > scrollCurrent) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  scrollPrev = scrollCurrent;
});
