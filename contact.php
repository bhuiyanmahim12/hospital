<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);
  ?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Message Received</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <h1>Thank You!</h1>
    </header>
    <main>
      <div class="card">
        <h2>Message Received</h2>
        <p><strong>Dear <?php echo $name; ?>,</strong></p>
        <p>Thank you for contacting us. We have received your message successfully.</p>
        <p><strong>Your Email:</strong> <?php echo $email; ?></p>
        <p><strong>Your Message:</strong><br><?php echo $message; ?></p>
        <p>Our team will contact you shortly. Stay connected!</p>
        <a href="index.php" class="btn">Back to Home</a>
      </div>
    </main>
  </body>
  </html>
  <?php
}
?>
