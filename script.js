// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

// SCROLL REVEAL

ScrollReveal({

  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: false

});

ScrollReveal().reveal('.hero-text', {
  origin: 'left'
});

ScrollReveal().reveal('.hero-image', {
  origin: 'right'
});

ScrollReveal().reveal('.social', {
  origin: 'bottom'
});