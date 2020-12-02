<?php

require_once("./Connection.php");

class Content extends Connection{
    public static function getAll() {
        $conn = Connection::getDb();

        $i = 0;

        $stmt = $conn->prepare("SELECT * FROM produtos");
        // JOIN categoria
                                // on categoria.id_categoria = produtos.fk_idcategoria");
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
