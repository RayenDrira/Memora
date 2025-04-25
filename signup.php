<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sing Up</title>
    <link rel="stylesheet" href="css\Signup.css">
    <link rel="stylesheet" href="css\button.css">
    <link rel="icon" href="img\logo.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/61523b4b4d.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="JS\validation.js" defer></script>
    <style>
        .name-row {
            display: flex;
            gap: 15px;
        }
        
        .name-row .input-box {
        flex: 1;
        }
    </style>
</head>

<body>
    <form action="register.php" method="POST" class="form-box">
        <section>
            <h1>Sign Up</h1>
            <?php
            if (isset($_GET['register'])) {
                if ($_GET['register'] == 'exists') {
                    echo "<p style='text-align: center;
                        color: #fff;
                        margin-bottom: 20px;'>❌This email address is already registered.</p>";
            } else if ($_GET['register'] == 'fail') {
                echo "<p style='text-align: center;
                        color: #fff;
                        margin-bottom: 20px;'>❌ Registration failed. Try again.</p>";
            }}
            ?>
            <div class="name-row">
                <div class="input-box">
                    <input type="text" id="firstname_input" placeholder="First Name" name="firstname">
                </div>
                <div class="input-box">
                    <input type="text" id="lastname_input" placeholder="Last Name" name="lastname">
                </div>
                
            </div>
            <div class="input-box">
                <input type="email" id="email_input" placeholder="Email" name="email">
                <i class="fas fa-envelope"></i>
                
            </div>
            <div class="input-box">
                <input type="password" id="password_input" placeholder="Password" name="password">
                <i class="fa-solid fa-lock"></i>
            </div>
            <div class="remenber-forgot">
                <label><input type="checkbox" id="terms_checkbox">I accept the terms and conditions</label>
            </div>
            <button type="submit" class="btx-blue-blue">Sign Up</button>
            <div class="register-link">
                <p>Already have an account? <a href="signin.php">Sign in</a></p>
            </div>
        </section>
    </form>

</body>

</html>