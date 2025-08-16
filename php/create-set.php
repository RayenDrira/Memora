<?php
require '../php/connexion.php'; // Include the database connection file
session_start(); // Start the session at the very beginning 


// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo "<script>
            alert('User not logged in. Please log in and try again.');
            window.location.href = '../html/signin.html';
          </script>";
    exit();
} else {
    // Debugging: Log the user_id
    error_log("User ID: " . $_SESSION['user_id']);
}







$user_id = $_SESSION['user_id']; // Get user ID from session

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode the JSON data from the form
    $data = json_decode($_POST['data'], true);

    // Extract metadata
    $title = $conn->real_escape_string(trim($data['metadata']['title']));
    $category_id = $conn->real_escape_string(trim($data['metadata']['category']));
    $description = $conn->real_escape_string(trim($data['metadata']['description']));









    // Insert the set into the 'flashcard_sets' table
    $insert_set_sql = "INSERT INTO flashcard_sets (user_id, category_id, title, description) VALUES ('$user_id', '$category_id', '$title', '$description')";

    if ($conn->query($insert_set_sql) === TRUE) {
        // Get the ID of the newly created set
        $set_id = $conn->insert_id;

        // Insert each flashcard into the 'flashcards' table
        $insert_flashcard_sql = $conn->prepare("INSERT INTO flashcards (set_id, question, answer, hint, option_1, option_2, option_3, option_4) 
                                                VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

        foreach ($data['flashcards'] as $flashcard) {
            error_log("Processing flashcard: " . json_encode($flashcard)); // Debugging

            $question = $conn->real_escape_string($flashcard['question']);
            $answer = $conn->real_escape_string($flashcard['answer']);
            $hint = $conn->real_escape_string($flashcard['hint']);
            $option_1 = $conn->real_escape_string($flashcard['quiz']['correctOption']);
            $option_2 = $conn->real_escape_string($flashcard['quiz']['wrongOption1']);
            $option_3 = $conn->real_escape_string($flashcard['quiz']['wrongOption2']);
            $option_4 = $conn->real_escape_string($flashcard['quiz']['wrongOption3']);

            $insert_flashcard_sql->bind_param("isssssss", $set_id, $question, $answer, $hint, $option_1, $option_2, $option_3, $option_4);

            if (!$insert_flashcard_sql->execute()) {
                error_log("Error inserting flashcard: " . $insert_flashcard_sql->error); // Debugging
            }
        }

        $insert_flashcard_sql->close();

        echo "<script>
                alert('Set and flashcards created successfully!');
                window.location.href = '../html/create.php';
              </script>";
    } else {
        echo "<script>
                alert('Error: Unable to create set. Please try again.');
                window.location.href = '../html/create.php';
              </script>";
    }
}

// Close the database connection
$conn->close();
?>