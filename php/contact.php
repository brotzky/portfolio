<pre><?php
ini_set('display_errors', 1);
print_r(apache_get_modules());

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $message = isset($_POST['message']) ? $_POST['message'] : '';


  echo $dataString = "Name: ". $name.", "."Email: ".$email.", "."Message: ".$message;

    // TODO: Send Email

    if(isset($_POST['name'])){
      $to = "brotzky@gmail.com"; // this is your Email address
      $from = $_POST['email'];
      $name = $_POST['name'];
      $subject = "Form submission";
      $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];

      $headers = "From: " . $from;

      mail($to,$subject,$message,$headers);

    }

?></pre>
