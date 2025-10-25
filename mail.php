<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to log errors
function logError($message) {
    error_log(date('[Y-m-d H:i:s] ') . $message . PHP_EOL, 3, "email_errors.log");
}

// Function to sanitize input
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)));
}

// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect input data
    $to = 'kc.kasaraneni@gmail.com'; // Your email address
    $name = sanitizeInput($_POST["name"] ?? '');
    $email = sanitizeInput($_POST["email"] ?? '');
    $subject = sanitizeInput($_POST["subject"] ?? '');
    $message = sanitizeInput($_POST["message"] ?? '');

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email format.';
    } elseif (empty($name) || empty($subject) || empty($message)) {
        echo 'All fields are required.';
    } else {
        // Prepare email headers
        $headers = "From: $name <$email>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Prepare email body
        $emailBody = "Name: $name\n";
        $emailBody .= "Email: $email\n";
        $emailBody .= "Subject: $subject\n\n";
        $emailBody .= "Message:\n$message";

        // Attempt to send email
        if (mail($to, $subject, $emailBody, $headers)) {
            echo 'Your message has been sent successfully.';
        } else {
            echo 'Failed to send email. Please try again later.';
            logError("Failed to send email. To: $to, Subject: $subject");
        }
    }
} else {
    echo 'Invalid request method.';
}

// Log any PHP errors
$error = error_get_last();
if ($error !== null) {
    logError("PHP Error: " . print_r($error, true));
}
?>
