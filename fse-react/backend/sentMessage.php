<?php
require_once("./model/msg.php");

$msg = new Msg;
$msg->email = $_POST['email'];
$msg->msg = $_POST['comentario'];

$msg->newMsg();