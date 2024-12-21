function authenticate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Add your authentication logic here
    // For simplicity, let's consider email as "user@example.com" and password as "password123"
    if (email === "iyehah@gmail.com" && password === "123") {
        // Redirect to auth.html if authentication is successful
        window.location.href = "app.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
  }
  