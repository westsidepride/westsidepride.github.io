// Parallax effect for accent container
document.addEventListener('scroll', () => {
  const accentContainer = document.querySelector('.accent-container');
  if (accentContainer) {
    const scrollPosition = window.scrollY;
    const parallaxOffset = scrollPosition * 0.5; // Adjust 0.5 for slower/faster effect
    accentContainer.style.backgroundPosition = `0 ${-parallaxOffset}px`;
  }
});
