document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your message has been sent successfully!');
      contactForm.reset();
    });
  });
  