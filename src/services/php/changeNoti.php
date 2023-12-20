<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id']) && isset($data['nombre']) && isset($data['usuario'])) {
    $id = $conn->real_escape_string($data['id']);
    $nombre = $conn->real_escape_string($data['nombre']);
    $usuario = $conn->real_escape_string($data['usuario']);

    $sql = "UPDATE notifications SET active = 0, userSystem = ? WHERE id = ? AND name = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sii", $usuario, $id, $nombre); 
    if ($stmt->execute()) {
        echo "Datos guardados correctamente";
    } else {
        echo "Error al guardar los datos: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "No se han recibido todos los campos del formulario.";
}


$conn->close();
