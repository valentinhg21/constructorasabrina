<?php  


require("mailer/class.phpmailer.php");
require("mailer/class.pop3.php");
require("mailer/class.smtp.php");


$nombre = $_POST['dato_0']; 
$email = $_POST['dato_1']; 
$celular = $_POST['dato_2']; 
$area = $_POST['dato_3']; 
$mensaje = $_POST['mensaje']; 

$resHTML   = "<h2>Datos del cliente</h2>";
$resHTML  .= "Nombre Completo: <strong>".$nombre."</strong><br/>";
$resHTML  .= "Email: <strong>".$email."</strong><br/>";
$resHTML  .= "Telefono: <strong>".$celular."</strong><br/>";
$resHTML  .= "Maquina: <strong>".$area."</strong><br/>";
$resHTML  .= "Mensaje: <strong>".$mensaje."</strong><br/><br/>";

$destino = 'valentin@zetenta.com';
$from = $destino;
$to = $destino;

$subject = "Consulta vía Web - ".$nombre;
$headers = "From:" . $from . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

if(mail($to,$subject,$resHTML, $headers)) {
    echo json_encode(array("status"=>200));
 } else {
    echo json_encode(array("status"=>400));
}