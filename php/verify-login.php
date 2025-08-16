<?php
session_start(); // Start the session
require 'connexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the form
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Escape user input to prevent SQL injection
    $email = $conn->real_escape_string($email);

    // Query to check if the email exists
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch user data
        $user = $result->fetch_assoc();

        // Verify the password using password_verify()
        if (password_verify($password, $user['password'])) {
            // Store user information in the session
            $_SESSION['user_id'] = $user['id']; // Corrected column name
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['user_firstname'] = $user['firstname'];
            $_SESSION['user_lastname'] = $user['lastname'];
            echo "<script>
            alert('Sign-in successful! Redirecting to Home...');
            window.location.href = '../html/s-index.php';
          </script>";
            exit();
        } else {
            // Incorrect password
            echo "<script>
                    alert('Incorrect password. Please try again.');
                    window.location.href = '../html/signin.html';
                  </script>";
            exit();
        }
    } else {
        // Email not found
        echo "<script>
                alert('No account found with this email. Please sign up.');
                window.location.href = '../html/signup.html';
              </script>";
        exit();
    }
}

// Close the database connection
$conn->close();
?>