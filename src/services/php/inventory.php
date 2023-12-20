<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("error de conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM inventory";

$results = $conn->query($sql);

if ($results->num_rows > 0) {
    $data = array();
    while ($row = $results->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results"; // Agrega un punto y coma aquí
}

$conn->close();
