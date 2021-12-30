<?php

include_once('database.php');


$objStmt = $objConn->prepare("INSERT INTO  subscribers (email) VALUES (?)");

$objStmt->bind_param($_REQUEST['Email-2']);
$objStmt->execute();

$objStmt->close();

?>



