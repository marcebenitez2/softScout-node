<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('Error de conexion' . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (is_array($data) && !empty($data)) {
        $idsArray = array_map('intval', $data);

        $success = true;

        foreach ($idsArray as $id) {
            $sql = "DELETE FROM inventory WHERE id = $id";

            if (!$conn->query($sql)) {
                $success = false;
                break;
            }
        }
    }
    if ($success) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false, "error" => $conn->error));
    }
} else {
    echo json_encode(array("success" => false, "error" => "No se recibieron datos"));
}

$conn->close();
