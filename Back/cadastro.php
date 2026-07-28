<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include "conexao.php";

var_dump($_POST);
 
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $capa = $_POST["capa"];
    $tipo = $_POST["tipo"];
    $dataLancamento = $_POST["dataLancamento"];
    $titulo = $_POST["titulo"];
    $genero = $_POST["genero"];
    $avaliacao = $_POST["avaliacao"];
    $sinopse = $_POST["sinopse"];
    
    $sql = "INSERT INTO catalogo (capa, tipo, data_de_lançamento, titulo, genero, avaliacao, sinopse) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssis", $capa, $tipo, $dataLancamento, $titulo, $genero, $avaliacao, $sinopse);
      

    if( $stmt->execute()){
        header("Location: ../index.html");

    }
    else{
        echo "Erro: " . $stmt->error;
    }
    $stmt->close();
    
    }
    $conn->close();

