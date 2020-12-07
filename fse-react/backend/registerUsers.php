<?php

require "./model/users.php";

$user = new User;
$user->nome = $_POST['name'];
$user->email = $_POST['email'];
$user->idade = $_POST['idade'];
$user->senha = $_POST['senha'];
$user->cep = $_POST['cep'];
$user->cidade = $_POST['cidade'];

$user->registerUser();

