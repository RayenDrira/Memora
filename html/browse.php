<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memora</title>
    <link rel="icon" href="img\logo.png" type="image/x-icon">
    <link rel="stylesheet" href="..\css\main.css">
    <link rel="stylesheet" href="..\css\button.css">
    <link rel="stylesheet" href="..\css\Categories.css">
    <link rel="stylesheet" href="..\css\burger.css">
    <script type="text/javascript" src="..\js\Categories.js" defer></script>
    <script type="text/javascript" src="..\js\navigation.js" defer></script>
    <script src=..\js\logout.js></script>
</head>

<body>
    <header>
        <nav>
            <span>
                <img src="..\img\logo.png" alt="">
                <h1>Memora</h1>
            </span>
            <span style="padding-right:110px;">
                <a href="s-index.php">Home</a>
                <a href="browse.php">Browse</a>
                <a href="create.php">create</a>
                <a href="contact.html">Become Creator</a>
            </span>
            <span id="user-header">
                <svg id="toggle-categories" xmlns="http://www.w3.org/2000/svg" width="38" height="38"
                    viewBox="0 0 38 38" fill="none">
                    <path
                        d="M6.33301 9.50008C6.33301 9.08016 6.49982 8.67743 6.79676 8.3805C7.09369 8.08356 7.49642 7.91675 7.91634 7.91675H30.083C30.5029 7.91675 30.9057 8.08356 31.2026 8.3805C31.4995 8.67743 31.6663 9.08016 31.6663 9.50008C31.6663 9.92001 31.4995 10.3227 31.2026 10.6197C30.9057 10.9166 30.5029 11.0834 30.083 11.0834H7.91634C7.49642 11.0834 7.09369 10.9166 6.79676 10.6197C6.49982 10.3227 6.33301 9.92001 6.33301 9.50008ZM6.33301 19.0001C6.33301 18.5802 6.49982 18.1774 6.79676 17.8805C7.09369 17.5836 7.49642 17.4167 7.91634 17.4167H30.083C30.5029 17.4167 30.9057 17.5836 31.2026 17.8805C31.4995 18.1774 31.6663 18.5802 31.6663 19.0001C31.6663 19.42 31.4995 19.8227 31.2026 20.1197C30.9057 20.4166 30.5029 20.5834 30.083 20.5834H7.91634C7.49642 20.5834 7.09369 20.4166 6.79676 20.1197C6.49982 19.8227 6.33301 19.42 6.33301 19.0001ZM7.91634 26.9167C7.49642 26.9167 7.09369 27.0836 6.79676 27.3805C6.49982 27.6774 6.33301 28.0802 6.33301 28.5001C6.33301 28.92 6.49982 29.3227 6.79676 29.6197C7.09369 29.9166 7.49642 30.0834 7.91634 30.0834H30.083C30.5029 30.0834 30.9057 29.9166 31.2026 29.6197C31.4995 29.3227 31.6663 28.92 31.6663 28.5001C31.6663 28.0802 31.4995 27.6774 31.2026 27.3805C30.9057 27.0836 30.5029 26.9167 30.083 26.9167H7.91634Z"
                        fill="white" />
                </svg>
                <svg onclick="handleLogout()" class="profile-logo" xmlns="http://www.w3.org/2000/svg" width="42"
                    height="40" viewBox="0 0 42 40" fill="none">
                    <g clip-path="url(#clip0_121_715)">
                        <path
                            d="M28.2639 17.5C28.2639 21.65 24.8208 25 20.5556 25C16.2903 25 12.8472 21.65 12.8472 17.5C12.8472 13.35 16.2903 10 20.5556 10C24.8208 10 28.2639 13.35 28.2639 17.5Z"
                            fill="#31C1E1" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M41.1111 20C41.1111 31.05 31.9125 40 20.5556 40C9.19861 40 0 31.05 0 20C0 8.95 9.19861 0 20.5556 0C31.9125 0 41.1111 8.95 41.1111 20ZM10.2778 34.375C10.6889 33.71 14.6715 27.5 20.5299 27.5C26.3625 27.5 30.3708 33.725 30.7819 34.375C33.1712 32.7675 35.1234 30.6193 36.4706 28.1153C37.8178 25.6113 38.5197 22.8264 38.516 20C38.516 10.325 30.4736 2.5 20.5299 2.5C10.5861 2.5 2.54375 10.325 2.54375 20C2.54375 25.95 5.60139 31.225 10.2778 34.375Z"
                            fill="#31C1E1" />
                    </g>
                    <defs>
                        <clipPath id="clip0_121_715">
                            <rect width="41.1111" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
        </nav>
    </header>
    <div class="content">
        <div class="categories">
            <span>
                <?php
                require '../php/connexion.php';
                $query = "SELECT id, name FROM categories";
                $result = $conn->query($query);
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo '<a href="#" class="category-link" data-category-id="' . $row['id'] . '">' . htmlspecialchars($row['name']) . '</a>';
                    }
                }
                ?>
            </span>
        </div>
        <div class="categories-content">
            <h2 class="big-title" id="categorie-title"><span class="blue">Select</span>a Category <span
                    class="blue">!</span></h2>
            </h2>
            <div class="main-content" id="flashcard-sets">

                <!-- Flashcard sets will be dynamically inserted here -->

            </div>
        </div>

        <div class="flash-image"></div>
    </div>
    <footer>
        <div>
            <div>
                <h4>you can find us on</h4>
                <div><img src="../img/facebook.png" alt="">
                    <a>Facebook.com</a>
                </div>
                <div><img src="../img/instagram.png" alt="">
                    <a>Instagram.com</a>
                </div>
                <div><img src="../img/mail.png" alt="">
                    <a>email@domaine.com</a>
                </div>
            </div>
            <div class="gap-footer">
                <h4>Memora</h4>
                <a href="s-index.html">Home</a>
                <a href="browse.html">Browse</a>
                <a href="create.html">Create</a>
                <a href="contact.html">contact</a>
            </div>
            <div class="gap-footer">
                <h4>Categories</h4>
                <a href="#">History</a>
                <a href="">Geography</a>
                <a href="">Language</a>
                <a href="">Science</a>
                <a href="">Literature</a>
            </div>
        </div>
        <p>© 2025 Memora. All rights reserved.</p>
    </footer>
    <script>
        document.getElementById("toggle-categories").addEventListener("click", () => {
            const categoriesDiv = document.querySelector(".categories");
            if (categoriesDiv.style.display === "block") {
                categoriesDiv.style.display = "none";
            } else {
                categoriesDiv.style.display = "block";
            }
        });
    </script>
</body>

</html>