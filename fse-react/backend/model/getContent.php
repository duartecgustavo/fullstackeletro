<?php

require_once("./Connection.php");


class Content extends Connection{
    public static function getAll() {
        $conn = Connection::getDb();

        $i = 0;

        $stmt = $conn->prepare("SELECT * FROM produtos JOIN categorias ON produtos.id_categoria = categorias.id_categoria");
        $stmt->execute();
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            $json[$i]= 
                $row    
            ;
            $i++;
        }

        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json');
        echo json_encode($json);
    }
}
