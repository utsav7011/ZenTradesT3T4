// Email Validation
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Password Validation
  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
  
  // Event listener for the login button
  document.querySelector('.btn-login').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the form from submitting
  
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate the input fields
    if (!validateEmail(username)) {
      alert('Please enter a valid email address.');
    } else if (!validatePassword(password)) {
      alert('Password must contain at least 8 characters, one uppercase letter, one number, and one special character (@, $, !, %, *, &).');
    } else {
      // Check if the credentials are correct (for example, by making a server request)
      const areCredentialsCorrect = password === 'SmartServTest@123'; // Placeholder; replace with actual validation logic
  
      // Display an alert indicating the correctness of the credentials
      if (areCredentialsCorrect) {
        // Redirect to the dashboard page
        window.location.href = 'dashboard2.html';
      } else {
        alert('Credentials are incorrect. Login failed.');
      }
    }
  });
  
  // Event listener for the Forgot Password link
  document.querySelector('.forgot-password a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
  
    // Open the email client with the specified email address and subject
    window.location.href = `mailto:support@smartserv.io?subject=Password Reset Request`;

    // Show an alert box with the message
    alert('Mail sent to the mail address: support@smartserv.io');
  });
