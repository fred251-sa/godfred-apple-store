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
