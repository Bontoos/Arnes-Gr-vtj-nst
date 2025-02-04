const navLinks = document.querySelectorAll('nav ul li a');

const offset = 100;

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});