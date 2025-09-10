/*Contact form submission*/

const form = document.querySelector(".contact-form");
  const status = document.querySelector("#form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.textContent = "Thanks for your enquiry! I’ll get back to you soon.";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong. Please try again.";
    }
  });