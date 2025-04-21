<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="contact.js"></script>
    <link rel="stylesheet" href="styles.css" />
   
    <title>Contact Us</title>
</head>
<body>
<header>
        <nav>
            <span>
                <img src="..\img\logo.png" alt="">
                <h1>Memora</h1>
            </span>
            <span>
                <a href="index.html">Home</a>
                <a href="">Browse</a>
                <a href="">create</a>
                <a href="contact.html">Contact</a>
            </span>
            <span>
                <button class="btx-blue-reverse" id="login">Login</button>
                <button class="btx-blue" id="signup">SignUp</button>
            </span>
        </nav>
    </header>
<section class="contact" id="contact">
  <h2 class="heading">Contact <span>Us!</span></h2>
  <span id="contact-anchor" class="anchor"></span>
    <form name="form1" action="connexion.php" method="post" enctype="multipart/form-data">
       
        <div class="input-box">
          <div class="input-field" id="row">
            <input type="text" placeholder="Full Name" name="fname" required />
          </div>
          <div class="input-field" id="row">
            <input type="email" placeholder="Email address" name="email" required />
          </div>
        </div>
        <div class="input-box">
          <div class="input-field" id="row">
            <input type="number" placeholder="Mobile Number" name="tel" required />
          </div>
          <div class="input-field" id="row">
            <input type="text" placeholder="Email subject" name="sub" required />
          </div>
        </div>
        <div class="textarea-field">
          <textarea cols="30" rows="10" placeholder="Your Message" required
          ></textarea>
        </div>
        <div class="box-btn">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </section>
    <footer>
        <div>
            <div>
                <h4>you can find us on</h4>
                <div><img src="img/facebook.png" alt="">
                    <a>Facebook.com</a>
                </div>
                <div><img src="img/instagram.png" alt="">
                    <a>Instagram.com</a>
                </div>
                <div><img src="img/mail.png" alt="">
                    <a>email@domaine.com</a>
                </div>
            </div>
            <div class="gap-footer">
                <h4>Memora</h4>
                <a href="s-index.html">Home</a>
                <a href="shop.html">Browse</a>
                <a href="shop.html">Create</a>
                <a href="contact.html">contact</a>
            </div>
            <div class="gap-footer">
                <h4>Categories</h4>
                <a>History</a>
                <a>Dinasaurs</a>
                <a>Geography</a>
                <a>Language</a>
                <a>General</a>
            </div>
        </div>
        <p>© 2023 Memora. All rights reserved.</p>
    </footer>


    
</body>
</html>