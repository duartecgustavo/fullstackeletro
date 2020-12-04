<?php

require_once ("./Connection.php");

class Msg extends Connection
{
    // private $name;
    // private $msg;

    // public function Message($name, $msg){
    //     $this->name = $name;
    //     $this->msg = $msg;
    // }
    

    public static function getAll()
    {
        $conn = Connection::getDb();
        $i = 0;

        $stmt = $conn->prepare("SELECT * FROM comentarios");
        $stmt-> execute();
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

    // public static function newMsg($name, $msg)
    // {
    //     $conn = Connection::getDb();
    //     $stmt = $conn->prepare("INSERT INTO comentarios(nome, msg) VALUES (?, ?)");
    //     $stmt->bindParam(1, $name);
    //     $stmt->bindParam(2, $msg);
    //     $stmt->execute();
    // }
}