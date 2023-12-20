<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("error de conexión: " . $conn->connect_error);
}

$sql = "SELECT c.*, p.title AS plan_title, p.url AS plan_url
FROM calendary c
LEFT JOIN plans p ON c.id = p.event;";

$results = $conn->query($sql);

if ($results->num_rows > 0) {
    $data = array();
    while ($row = $results->fetch_assoc()) {
        $eventId = $row['id'];
        if (!isset($data[$eventId])) {
            // Si el evento no existe en el array, agregarlo
            $data[$eventId] = $row;
            $data[$eventId]['plans'] = array();
        }

        // Si hay un plan (title y url no son NULL), agregarlo al array de planes
        if (!is_null($row['plan_title']) && !is_null($row['plan_url'])) {
            $data[$eventId]['plans'][] = array(
                'plan_title' => $row['plan_title'],
                'plan_url' => $row['plan_url']
            );
        }
    }
    echo json_encode(array_values($data)); // Convertir el array asociativo a un array indexado antes de codificar a JSON
} else {
    echo "0 results";
}

$conn->close();

?>
