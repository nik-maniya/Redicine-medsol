<?php

include_once('env.php');

// Create connection
$objConn = new mysqli($strHostname, $strUsername, $strPassword, $strDatabase);

// Check connection
if ($objConn->connect_error) {
  die("Connection failed: " . $objConn->connect_error);
}
?>