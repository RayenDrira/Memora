<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Connect to the database
    $conn = new mysqli("localhost", "root", "", "memora");
    if ($conn->connect_error) {
        die("❌ Database connection failed: " . $conn->connect_error);
    }

    // Simple query (no hash)
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows === 1) {
        header("Location: index.html");
        exit();
    } else {
        header("Location: signin.php");
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>
