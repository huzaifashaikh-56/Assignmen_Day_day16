const form = document.getElementById('registrationForm');
const message = document.getElementById('regMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    message.textContent = "Please fill all fields.";
    message.className = "error";
    return;
  }

  const userData = {
    name: name,
    password: btoa(password) // base64 encode (for simulation only)
  };

  localStorage.setItem(email, JSON.stringify(userData));
  message.textContent = "Registration successful!";
  message.className = "message";
  form.reset();
});
