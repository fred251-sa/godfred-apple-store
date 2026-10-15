// GODFRED APPLE STORE — front-end interactions

const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

// Mobile menu toggle
navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// Close menu after choosing a link
nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Header shadow once scrolled
const header = document.querySelector(".site-header");
const onScroll = () => {
  header?.classList.toggle("scrolled", window.scrollY > 10);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Current year in footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Reveal-on-scroll animations (respecting reduced motion)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".card, .feature, .review, .stat, .why-photo, .checklist li"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
