<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Validate input
    if (empty($name) || empty($email) || empty($message)) {
        // Handle empty fields
        echo '<script>alert("Please fill in all fields.")</script>';
    } else {
        // Construct email
        $to = "gaamangwemotsamai@gmail.com";
        $subject = "Contact Form Submission: $subject";
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";
        
        // Send email
        if (mail($to, $subject, $body, $headers)) {
            // Email sent successfully
            echo '<script>alert("Your message has been sent successfully. We will get back to you shortly.")</script>';
        } else {
            // Error sending email
            echo '<script>alert("An error occurred while sending your message. Please try again later.")</script>';
        }
    }
} else {
    // If the form is not submitted, redirect to the contact page
    header("Location: contacts.html");
}
?>
