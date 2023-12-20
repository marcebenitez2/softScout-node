<?php

require 'config.php';


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtén el cuerpo de la solicitud POST como una cadena JSON
$data = json_decode(file_get_contents('php://input'), true);

// Verifica si se han recibido los campos del formulario
if (isset($data['nombre']) && isset($data['telefono']) && isset($data['correo']) && isset($data['mensaje'])) {
    $name = $conn->real_escape_string($data['nombre']);
    $tel = $conn->real_escape_string($data['telefono']);
    $mail = $conn->real_escape_string($data['correo']);
    $message = $conn->real_escape_string($data['mensaje']);

    // Prepara la consulta SQL utilizando una sentencia preparada
    $sql = "INSERT INTO notifications (name, tel, mail, message, active) VALUES (?, ?, ?, ?, 1)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $tel, $mail, $message);

    // Ejecuta la consulta preparada
    if ($stmt->execute()) {
        echo "Datos guardados correctamente";
    } else {
        echo "Error al guardar los datos: " . $conn->error;
    }

    // Cierra la conexión a la base de datos y libera los recursos
    $stmt->close();
} else {
    echo "No se han recibido todos los campos del formulario.";
}

$conn->close();
?>
