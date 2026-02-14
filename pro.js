
// JS CONTROLLING THE LOADERRRR
 
window.addEventListener("DOMContentLoaded", () => {

  const paths = document.querySelectorAll(".logo path");

  paths.forEach(path => {
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      stroke: "#ffffff"
    });
  });

  const tl = gsap.timeline();

  // Slow drawing animation
  tl.to(paths, {
    strokeDashoffset: 0,
    duration: 3, // Slower draw
    ease: "power2.out",
    stagger: 0.5
  }, 0)

  // Color glow cycling DURING draw
  .to(paths, {
    stroke: "#00f5ff",
    duration: 1,
    repeat: 2,
    yoyo: true,
    ease: "sine.inOut"
  }, 0)

  .to(paths, {
    stroke: "#ff9900",
    duration: 1,
    repeat: 2,
    yoyo: true,
    ease: "sine.inOut"
  }, 0)

  // Fade in tagline
  .to(".tagline", {
    opacity: 1,
    y: -5,
    duration: 1
  })

  // Fade out loader
  .to("#loader", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  });

});





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

