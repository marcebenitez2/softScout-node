<?php

require 'config.php';


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $title = $data['nombre'];
    $date = $data['fecha'];
    $endDate = $data['fechaFin'];
    $starttime = $data['inicio'];
    $endtime = $data['fin'];
    $location = $data['lugar'];
    $description = $data['descripcion'];
    $type = $data['tipo'];
    $branch = $data['rama'];


    $sql = "DELETE FROM calendary WHERE id=$id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo "0 results";
    }
}

$conn->close();

?>