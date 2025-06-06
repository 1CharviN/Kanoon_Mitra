const userTypeSelect = document.querySelector('[name="user_type"]');
const barLabel = document.getElementById('barRegLabel');
const barInput = document.getElementById('bar_number');
userTypeSelect.addEventListener('change', () => {
    if (userTypeSelect.value === 'advocate') {
      barLabel.style.display = 'block';
      barInput.style.display = 'block';
    } else {
      barLabel.style.display = 'none';
      barInput.style.display = 'none';
    }
  });
  const password = document.querySelector('[name="password"]');
  const confirmPassword = document.querySelector('[name="confirm_password"]');
  confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
    } else {
      confirmPassword.setCustomValidity("");
    }
  });
  const photoInput = document.querySelector('[name="photo"]');
  const idProofInput = document.querySelector('[name="id_proof"]');
  const MAX_SIZE = 2 * 1024 * 1024; 
  function validateFileSize(input) {
    input.addEventListener('change', () => {
      if (input.files[0] && input.files[0].size > MAX_SIZE) {
        alert("File must be less than 2MB.");
        input.value = '';
      }
    });
  }
  validateFileSize(photoInput);
  validateFileSize(idProofInput);
  const otpButton = document.querySelector('button[type="button"]');
  otpButton.addEventListener('click', () => {
    alert("OTP sent to your registered mobile number (simulated)");
  });

