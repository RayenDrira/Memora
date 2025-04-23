<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli("localhost", "root", "", "memora");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // Check if the email already exists
    $checkEmail = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $checkEmail->store_result();

    if ($checkEmail->num_rows > 0) {
        // Email already exists
        header("Location: signup.php?register=exists");
        exit();
    }

    $checkEmail->close();

    // No hashing here
    $sql = "INSERT INTO users (fname, lname, email, password)
            VALUES ('$fname', '$lname', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        header("Location: signin.php?register=success");
        exit();
    } else {
        header("Location: signup.php?register=fail");
        exit();
    }

    $conn->close();
}
?>
