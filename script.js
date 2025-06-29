/document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: "smooth" });
    });
  });

  

  document.getElementById('admission-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const status = document.getElementById('form-status');
    status.style.color = 'green';
    status.textContent = 'Your admission inquiry has been sent successfully!';
  
    // Clear the form
    e.target.reset();
  
    // Optionally, send the data to a backend or Google Sheets here.
    // fetch('your-endpoint-here', { method: 'POST', body: new FormData(e.target) })
  });

  
  
  
  