document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Handling
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageBox.textContent = "Please fill in all fields!";
      messageBox.style.color = "red";
    } else {
      messageBox.textContent = "Message sent successfully! 🐾";
      messageBox.style.color = "green";
      form.reset();
    }
  });

  // Newsletter Popup Handling
  function showPopup() {
    document.getElementById('newsletter-popup').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
  }

  // Display popup after 5 seconds
  window.onload = function() {
    setTimeout(showPopup, 5000);
  };

  // Newsletter Form Submission
  document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    closePopup();
    // Here you can send the newsletter subscription data (email) to your server if necessary
  });

  // AOS (Animate On Scroll) Initialization
  AOS.init();

  // Swiper Initialization for image slider
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

 document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  
  // Change icon to reflect the current mode
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = '🌞'; // Sun icon for light mode
  } else {
    this.textContent = '🌙'; // Moon icon for dark mode
  }
});
});
