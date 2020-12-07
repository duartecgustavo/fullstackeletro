<?php

require_once ("./Connection.php");

class User extends Connection
{
    public $idusuario;
    public $nome;
    public $email;
    public $idade;
    public $cep;
    public $cidade;

    public function registerUser()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO usuarios (nome, email, nascimento, senha, cep, cidade) values ('$this->nome', '$this->email','$this->idade', '$this->senha', '$this->cep', '$this->cidade')");

        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}