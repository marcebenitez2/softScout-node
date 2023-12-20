<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('' . $conn->connect_error);
}

$sql = 'SELECT * FROM advices ORDER BY date DESC';

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $advices = array();

    while ($row = $result->fetch_assoc()) {
        $advice = array(
            'id' => $row['id'],
            'titulo' => $row['title'],
            'fecha' => $row['date'],
            'horaInicio' => $row['startTime'],
            'lugar' => $row['location'],
            'rama' => $row['branch'],
            'url' => null,
        );

        // Verificar si 'urlFile' no es nulo y asignar el valor correspondiente
        if ($row['urlFile'] !== null) {
            $advice['url'] = $row['urlFile'];
        }

        array_push($advices, $advice);
    }

    echo json_encode($advices);
} else {
    echo json_encode(array());
}

$conn->close();

?>
