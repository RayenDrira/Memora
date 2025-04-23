<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sing in</title>
    <link rel="stylesheet" href="css\SignIn.css">
    <link rel="stylesheet" href="css\button.css">
    <link rel="icon" href="img\logo.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/61523b4b4d.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="JS/signin.js" defer></script>


</head>

<body>
    <form action="login.php" method="POST" class="form-box">

        <section>
            <h1>Login</h1>
            <?php
            if (isset($_GET['register']) && $_GET['register'] == 'success') {
                echo "<p style='text-align: center;
                        color: #fff;
                        margin-bottom: 20px;'>✅ Registered successfully! Please log in.</p>";
            }
            ?>
            <div class="input-box">
                <input type="text" placeholder="Username" id="username_input" name="username">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" id="password_input" name="password">
                <i class="fa-solid fa-lock"></i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox" id="remember_checkbox">Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
    
                <button type="submit" class="btx-blue-blue">Sign In</button>
            <div class="register-link">
                <p>Don't have an Account ? <a href="signup.php">Sign Up</a></p>
            </div>
        </section>
    </form>

</body>

</html>