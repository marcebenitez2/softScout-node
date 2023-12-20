<?php 
require 'config.php';
$conn = new mysqli($servername, $username, $password, $dbname);

$data = json_decode(file_get_contents('php://input'), true);
$usuarioInput = $data['usuario'];
$contraInput = $data['contra'];



$sql = "SELECT * FROM accounts WHERE username = '$usuarioInput' AND password = '$contraInput'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    $nombre = $user['username'];
    $rol = $user['rol'];
    $rama = $user['branch'];
    $response = array(
        'status' => 'success',
        'username' => $nombre,
        'rol' => $rol,
        'branch' => $rama
    );
    echo json_encode($response);
} else {
    // Inicio de sesión fallido
    $response = array('status' => 'error', 'message' => 'Credenciales inválidas');
    echo json_encode($response);
}

$conn->close();

?>