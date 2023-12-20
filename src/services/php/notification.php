<?php

require 'config.php';
// Si la solicitud es del tipo OPTIONS, finaliza aquí para la respuesta de preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$conn = new mysqli($servername,$username, $password, $dbname);

if($conn -> connect_error){
    die("error de conexion: " . $conn -> connect_error);
}

$sql = "SELECT id, COUNT(*) AS notification_count, name, tel, mail, message,date,active,userSystem FROM notifications GROUP BY id, name, tel, mail, message, date, active, userSystem";

$result = $conn -> query($sql);

if($result->num_rows > 0){
    $data = array();
    while($row = $result-> fetch_assoc()){
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results";
}

$conn->close()

?>