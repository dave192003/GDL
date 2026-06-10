function initScrollAnimation() {
  const cards = document.querySelectorAll(".card-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
}

initScrollAnimation();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Toggles the .active class on and off when clicked
        navLinks.classList.toggle('active');
        
        // Optional: Animates the hamburger icon to change appearance slightly when open
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times'); // Changes ☰ to ✕
        } else {
            icon.classList.replace('fa-times', 'fa-bars'); // Changes ✕ back to ☰
        }
    });
});