<?php
require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['nombre'];
    $username = $data['usuario'];
    $password = $data['contrasenia'];
    $email = $data['email'];
    $rol = $data['rol'];
    $branch = $data['rama'];

    $sql = "INSERT INTO accounts (name, username, password, email, rol, branch) VALUES ('$name', '$username', '$password', '$email', '$rol', '$branch')";

    if ($conn->query($sql) === TRUE) {
        $response['success'] = true;
        $response['message'] = "Usuario agregado correctamente";
    } else {
        $response['success'] = false;
        $response['message'] = "Error al agregar el usuario: " . $conn->error;
    }

    // Devuelve la respuesta en formato JSON

    header('Content-Type: application/json');

    echo json_encode($response);
}
$conn->close();
