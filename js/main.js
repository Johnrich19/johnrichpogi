// Update this to your own email address before publishing.
const PORTFOLIO_EMAIL = "your-email@example.com";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    );
    window.location.href =
      "mailto:" + PORTFOLIO_EMAIL + "?subject=" + subject + "&body=" + body;
  });
});
