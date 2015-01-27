<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $dataString = "Name: ". $name.", "."Email: ".$email.", "."Message: ".$message;
    echo $dataString;

    //var_dump($_POST);

    // TODO: Send Email

    if(isset($_POST['name'])){
      $to = "brotzky@gmail.com"; // this is your Email address
      $from = $_POST['email'];
      $name = $_POST['name'];
      $subject = "Form submission";
      $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

      $headers = "From: " . $from;

      mail($to,$subject,$message,$headers);

      echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>
