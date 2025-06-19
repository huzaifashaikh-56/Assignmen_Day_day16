const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const userData = JSON.parse(localStorage.getItem(email));

  if (userData && userData.password === btoa(password)) {
    loginMessage.textContent = "Login successful!";
    loginMessage.className = "message";
  } else {
    loginMessage.textContent = "Invalid email or password.";
    loginMessage.className = "error";
  }
});
