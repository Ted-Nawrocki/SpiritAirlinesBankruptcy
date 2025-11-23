// Simple JS to handle the mobile hamburger menu and smooth scrolling.

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const body = document.body;

  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("nav-open");
    });
  }

  // Close menu when a nav link is clicked (on mobile)
  if (menu) {
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        body.classList.remove("nav-open");
      });
    });
  }

  // Optional: smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
