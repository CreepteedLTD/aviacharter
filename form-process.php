<?php



$EmailTo = "exmple@gmail.com";

$Subject = "New Message Received";



$errorMSG = array();

$name = $email = $message = null;


// NAME

if (empty($_POST["name"])) {

    $errorMSG[]= "Name";

} else {

    $name = $_POST["name"];

}



// EMAIL



if (empty($_POST["email"])) {

    $errorMSG[]= "Email";

} else {

    $email = $_POST["email"];

}


// DESCRIPTION
if (empty($_POST["message"])) {

    $errorMSG[]= "message";

} else {

    $message = $_POST["message"];
}


// prepare email body text

$Body = null;

$Body .= "<p><b>Name:</b> {$name}</p>";

$Body .= "<p><b>Email:</b> {$email}</p>";

$Body .= "<p><b>Message:</b> </p><p>{$message}</p>";



 



// send email

$headers = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From:  ' . $name . ' <' . $email .'>' . " \r\n" .

            'Reply-To: '.  $email . "\r\n" .

            'X-Mailer: PHP/' . phpversion();



if($name && $email && $message){

    $success = mail($EmailTo, $Subject, $Body, $headers );

}else{

    $success = false;

}





if ($success && empty($errorMSG) ){

   echo "success";

}else{
    echo json_encode($errorMSG);
} 