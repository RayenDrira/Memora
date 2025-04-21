<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connexion à la base de données
    $conn = new mysqli("localhost", "root", "", "signin");

    if ($conn->connect_error) {
        die("Échec de connexion: " . $conn->connect_error);
    }

    // Sécurisation avec requête préparée
    $stmt = $conn->prepare("SELECT * FROM login WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows == 1) {
        // Connexion réussie
        header("Location: index.html");
        exit();
    } else {
        // Connexion échouée
        header("Location: signin.html");
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>
