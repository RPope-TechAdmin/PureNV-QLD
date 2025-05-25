<?php
$serverName = "purenvqld.database.windows.net"; // Update with your Azure SQL Server name
$connectionOptions = array(
    "Database" => "Narangba", // Update with your database name
    "Uid" => "rpope@purenv.au", // Update with your username
    "PWD" => "Red-R0ck6341", // Update with your password
    "Encrypt" => 1,
    "TrustServerCertificate" => 0
);

// Establish connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die("Connection failed: " . print_r(sqlsrv_errors(), true));
}


// Get form data
$name = $_POST['name'];
$message = $_POST['message'];

// Insert data into database
$sql = "INSERT INTO [Narangba].[Feedback] (Name, Feedback) VALUES ('$name', '$feedback')";

if ($conn->query($sql) === TRUE) {
    echo "Feedback submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>