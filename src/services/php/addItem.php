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
    $name = $data['nombre'];
    $stock = $data['stock'];
    $available = $data['disponible'];
    $description = $data['descripcion'];
    $branch = $data['rama'];

    if($id){
        $sql = "UPDATE inventory SET name='$name', stock='$stock', available='$available', description='$description', branch='$branch' WHERE id=$id";

        if ($conn->query($sql) === TRUE) {
            echo "Item actualizado con éxito";
        } else {
            echo "Error al actualizar item: " . $conn->error;
        }
    } else {
        $sql = "INSERT INTO inventory (name, stock, available, description, branch) VALUES ('$name', '$stock', '$available', '$description', '$branch')";

        if ($conn->query($sql) === TRUE) {
            echo "Nuevo item insertado con éxito";
        } else {
            echo "Error al insertar nuevo item: " . $conn->error;
        }
    }
}

$conn->close();
