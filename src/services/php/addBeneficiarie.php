<?php
require 'config.php'; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lee la entrada como JSON
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $nombre = $data['nombre'];
    $dni = $data['dni'];
    $nacimiento = $data['nacimiento'];
    $direccion = $data['direccion'];
    $telefono = $data['telefono'];
    $mail = $data['mail'];
    $rama = $data['rama'];
    $personal = $data['personal'];
    $medical = $data['medical'];
    $cuota = $data['cuota'];
    $activo = $data['activo'];

    if ($id) {
        // Actualizar beneficiario existente
        $sql = "UPDATE beneficiaries SET name='$nombre', dni='$dni', birth='$nacimiento', direction='$direccion', tel='$telefono', mail='$mail', branch='$rama', personal_file='$personal', medical_file='$medical', cuota='$cuota', active='$activo' WHERE id=$id";

        if ($conn->query($sql) === TRUE) {
            echo "Beneficiario actualizado con éxito";
        } else {
            echo "Error al actualizar beneficiario: " . $conn->error;
        }
    } else {
        // Insertar nuevo beneficiario
        $sql = "INSERT INTO beneficiaries (name,dni, birth, direction, tel, mail, branch, personal_file, medical_file, cuota, active) VALUES ('$nombre', '$dni','$nacimiento', '$direccion', '$telefono', '$mail', '$rama', '$personal', '$medical', '$cuota', '$activo')";

        if ($conn->query($sql) === TRUE) {
            echo "Nuevo beneficiario insertado con éxito";
        } else {
            echo "Error al insertar nuevo beneficiario: " . $conn->error;
        }
    }
}

$conn->close();
