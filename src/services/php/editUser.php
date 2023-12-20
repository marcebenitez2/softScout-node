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
    $newUsername = $data['nuevoUsuario'];
    $password = $data['contrasenia'];
    $email = $data['email'];
    $rol = $data['rol'];
    $branch = $data['rama'];

    $sql = "UPDATE accounts SET name='$name', username='$newUsername', password='$password', email='$email', rol='$rol', branch='$branch' WHERE username='$username'";

    if ($conn->query($sql) === TRUE) {
        $response['success'] = true;
        $response['message'] = "Usuario actualizado correctamente";
    } else {
        $response['success'] = false;
        $response['message'] = "Error al actualizar el usuario: " . $conn->error;
    }
}

// Devuelve la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
