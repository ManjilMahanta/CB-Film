document.addEventListener("DOMContentLoaded", () => {
  // Burger menu toggle
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Scroll-triggered fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  // Gallery load
  const grid = document.querySelector(".gallery-grid");
  const maxTry = 300;
  let i = 1;

  const loadImage = () => {
    if (i > maxTry) return;

    const img = new Image();
    img.src = `Gallery/${i}.jpg`;

    img.onload = () => {
      const item = document.createElement('div');
      item.classList.add('gallery-item', 'fade-in');
      item.innerHTML = `<img src="${img.src}" alt="Gallery Image ${i}">`;
      grid.appendChild(item);

      setTimeout(() => observer.observe(item), i * 50);

      i++;
      loadImage(); // load next
    };

    img.onerror = () => {
      // Stop loading further if image doesn't exist
    };
  };

  loadImage(); // Start loading gallery

  // Lightbox setup
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const gallerySection = document.querySelector(".gallery-container");

  grid.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      lightboxImg.src = e.target.src;
      lightbox.classList.add("active");
      gallerySection.classList.add("gallery-blur");
    }
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    gallerySection.classList.remove("gallery-blur");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      gallerySection.classList.remove("gallery-blur");
    }
  });
});
