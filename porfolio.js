/* Contact form submission */

const form = document.querySelector(".contact-form");
  const ticket = document.querySelector("#ticket");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      ticket.classList.add("show"); // Show the ticket
      setTimeout(() => {
        ticket.classList.remove("show"); // Hide after 20 seconds
      }, 20000);
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
});