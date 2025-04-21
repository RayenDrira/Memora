<?php
//Database connection
// if($_SERVER["REQUEST_METHOD"]== "POST"){
//     var_dump($_POST);
// }

$servername="localhost";
$username='root';
$password="";
$dbname="base2";
// create connection
$conn= new mysqli($servername, $username, $password, $dbname);
//check connection
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
     
}
//form submission handling
if($_SERVER["REQUEST_METHOD"]== "POST"){
    $fname= $_POST['fname'];
    $email= $_POST['email'];
    $tel= $_POST['tel'];
    $sub= $_POST['sub'];
//insert data into the database
$sql="INSERT INTO informations (fname, email, tel, sub) VALUES ('$fname','$email','$tel','$sub')";
    if($conn->query($sql)=== TRUE){
        echo "new record created successfully";
    } else{
        echo "Error: ".$conn->error;

    }
}
    //fetch data from database
    $sql="SELECT * FROM informations";
    $result=$conn->query($sql);
    //chek if there are any rows returned
    if($result){
        if ($result->num_rows >0){
            
        echo "<table><tr><th>Full Name </th><th> email</th><th>phone Number</th> <th>subject</th></tr>";
        //output data of each row
        while($row = $result ->fetch_assoc()){
            echo "<tr><td>".$row["fname"]."</td><td>".$row["email"]."</td><td>".$row["tel"]."</td><td>".$row["sub"]."</td></tr>";
    }echo "</table>";
}
    else{
    echo "0 results";
}
    }

////close connection
$conn ->close();


?>