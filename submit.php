<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // You can perform further validation here
    
    // Send email
    $to = "gaamangwemotsamai@gmail.com"; // Change this to your email address
    $subject = "New Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    // Attempt to send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>Submission Received</h2>";
        echo "<p>Thank you for your submission.</p>";
    } else {
        echo "<h2>Error</h2>";
        echo "<p>Sorry, there was an error submitting your form. Please try again later.</p>";
    }
} else {
    // If someone tries to access submit.php directly, redirect them to the form page
    header("submissions.html");
    exit;
}


