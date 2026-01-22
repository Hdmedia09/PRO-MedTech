
gsap.to(".animated-img", {
  duration: 1.5,
  y: 0,
  opacity: 1,
  ease: "power4.out"
});


document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('#services .service-card'));

  // Observe each card; animate once based on DOM order (alternating directions)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const idx = cards.indexOf(entry.target);           // DOM order, reliable
      const dirClass = (idx % 2 === 0) ? 'enter-left' : 'enter-right';

      entry.target.classList.add(dirClass);              // add once
      entry.target.style.animationDelay = (idx * 0.09) + 's'; // subtle stagger
      io.unobserve(entry.target);                        // stop observing → no replay
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

  cards.forEach(card => io.observe(card));
});

