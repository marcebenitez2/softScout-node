<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('' . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $title = $data['titulo'];
    $date = $data['fecha'];
    $startTime = $data['horaInicio'];
    $location = $data['lugar'];
    $branch = $data['rama'];
    $url = $data['archivo'];

    if ($id) {
        if ($url === null) {
            $sql = "UPDATE advices SET title = '$title', date = '$date', startTime = '$startTime', location = '$location', branch = '$branch' WHERE id = $id";
        } else {
            $sql = "UPDATE advices SET title = '$title', date = '$date', startTime = '$startTime', location = '$location', branch = '$branch', urlFile = '$url' WHERE id = $id";
        }
    } else {
        if ($url === null) {
            $sql = "INSERT INTO advices (title, date, startTime, location, branch) VALUES ('$title','$date','$startTime', '$location', '$branch');";

        } else {
            $sql = "INSERT INTO advices (title, date, startTime, location, branch, urlFile) VALUES ('$title', '$date', '$startTime', '$location', '$branch', '$url')";
        }
    }

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false, "error" => $conn->error));
    }

    $conn->close();
}
