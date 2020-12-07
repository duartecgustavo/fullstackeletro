<?php

require_once ("./Connection.php");

class Msg extends Connection
{
    public $email;
    public $msg;

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

    public function newMsg()
    {
        $conn = Connection::getDb();

        $stmt = $conn->query("INSERT INTO comentarios(nome, msg) VALUES ('$this->email', '$this->msg')");
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}