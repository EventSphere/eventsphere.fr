<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$prenom = $_POST['firstname'];
$mail = $_POST['mail'];
$entreprise = $_POST['company'];
$projet = $_POST['project'];

$message = "<html>
<head>
<title>Demande de contact depuis le site</title>
</head>
<body>
<p>Vous avez reçu une demande de contact depuis le site.</p>
<p>Voici les informations du contact :</p>
<table>
<tr>
<th>Prénom</th>
<th>Mail</th>
<th>Entreprise</th>
</tr>
<tr>
<td>".$prenom."</td>
<td>".$mail."</td>
<td>".$entreprise."</td>
</tr>
</table>
<p>Voici le projet :</p>
<p>".$projet."</p>
</body>
</html>";

mail("nous@eventsphere.fr", "Demande de contact depuis le site", $message, "From: ".$mail."\r\nContent-Type: text/html; charset=utf-8");
?>