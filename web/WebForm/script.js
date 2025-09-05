

//javascripts code
document.getElementById('theme-toggle').addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
  });
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Thank you for contacting us!");
    this.reset();
  });
  



