document.querySelector('a[href="#about-us"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
});
