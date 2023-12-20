<?php
require 'config.php';


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Script para insetar item de inventario en la bd

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $title = $data['nombre'];
    $date = $data['fecha'];
    $endDate = $data['fechaFin'];
    $starttime = $data['inicio'];
    $endtime = $data['fin'];
    $location = $data['lugar'];
    $description = $data['descripcion'];
    $type = $data['tipo'];
    $branch = $data['rama'];

    if ($id) {
        $sql = "UPDATE calendary SET title='$title', date='$date', endDate='$endDate', startTime='$starttime', endTime='$endtime', location='$location', description='$description', type='$type', branch='$branch' WHERE id=$id";

        if ($conn->query($sql) === TRUE) {
            echo "Item actualizado con éxito";
        } else {
            echo "Error al actualizar item: " . $conn->error;
        }
    } else {
        $sql = "INSERT INTO calendary (title, date, endDate, startTime, endTime, location,description,type,branch) VALUES ('$title', '$date', '$endDate', '$starttime', '$endtime', '$location', '$description', '$type', '$branch')";

        if ($conn->query($sql) === TRUE) {
            echo "Nuevo item insertado con éxito";
        } else {
            echo "Error al insertar nuevo item: " . $conn->error;
        }
    }
}

$conn->close();
