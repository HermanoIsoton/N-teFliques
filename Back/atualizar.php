<?php
include 'conexao.php';
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    $id = $_POST['id'];
    $capa = $_POST["capa"];
    $tipo = $_POST["tipo"];
    $dataLancamento = $_POST["dataLancamento"];
    $titulo = $_POST["titulo"];
    $genero = $_POST["genero"];
    $avaliacao = $_POST["avaliacao"];
    $trailer = $_POST["trailer"];
    $sinopse = $_POST["sinopse"];
  
   $sql =   "UPDATE catalogo SET  capa=?, tipo=?, data_de_lançamento=?, titulo=?, genero=?, avaliacao=?, trailer=?, sinopse=? WHERE id=?";
   $stmt = $conn->prepare($sql);
   $stmt->bind_param("sssssdssi", $capa, $tipo, $dataLancamento, $titulo, $genero, $avaliacao, $trailer, $sinopse, $id);

   
    if( $stmt->execute()){
        header("Location: ../index.html");

    }
    else{
        echo "Erro: " . $stmt->error;
    }
    $stmt->close();
    
    }
    $conn->close();

  
    