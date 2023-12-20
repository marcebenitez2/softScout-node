<?php
require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $title = $data['titulo'];
    $event = $data['evento'];
    $branch = $data['rama'];
    $url = $data['archivo'];

    // Verificar si $event es "Ninguno" y asignar NULL en ese caso
    // Verificar si $event es "Ninguno" o nulo y asignar NULL en ese caso
    $eventValue = ($event === "Ninguno" || $event === null) ? 'NULL' : "'$event'";

    $sql = "INSERT INTO plans (title, event, branch, url) VALUES ('$title', $eventValue, '$branch', '$url')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false, "error" => $conn->error));
    }
}

$conn->close();
