<?php

abstract class Connection
{
    protected static function getDb()
    {

        $conn = new PDO(
            "mysql:host=localhost;dbname=fseletro-v2;charset=utf8",
            "root",
            ""
        );

        if ($conn) {
            return $conn;
        } else {
            echo "<h1> Error de conexão com BD </h1>";
        }
    }
}
