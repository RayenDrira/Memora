<?php
require '../php/connexion.php';

header('Content-Type: application/json');

// Fetch categories from the database
$query = "SELECT id, name FROM categories";
$result = $conn->query($query);

$categories = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $categories[] = $row;
    }
}

echo json_encode($categories);

$conn->close();
?>