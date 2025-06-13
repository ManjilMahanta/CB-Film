document.addEventListener("DOMContentLoaded", () => {
  // --- Burger menu ---
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- Scroll-triggered fade-in animation ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // --- WhatsApp form handler ---
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      const whatsappNumber = "123456789"; // Replace with your actual number
      const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

      window.open(url, "_blank");
    });
  }
});
