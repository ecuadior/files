// Highlight the nav link that matches the current URL path
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});

// FAQ accordion (used on /faq)
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
}
