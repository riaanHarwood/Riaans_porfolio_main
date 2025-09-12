/* Contact form submission */
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
}

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Select all "Live Demo" buttons
const liveDemoButtons = document.querySelectorAll('.btn');



const popup = document.createElement('div');
popup.className = 'demo-popup';
popup.innerText = 'Coming soon!';
document.body.appendChild(popup);

liveDemoButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.classList.add('show'); // show popup
    setTimeout(() => {
      popup.classList.remove('show'); // hide after 3 seconds
    }, 5000);
  });
});

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



