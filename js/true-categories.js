function displayCategoryButtons() {
  const flashcardSetsContainer = document.getElementById("flashcard-sets"); // You can rename this if needed

  // Clear the container first
  flashcardSetsContainer.innerHTML = "";

  // Fetch categories from the server
  fetch(`../php/fetch_categories.php`)
    .then((response) => response.json())
    .then((categories) => {
      console.log("Fetched categories:", categories); // Debug

      if (categories.error) {
        flashcardSetsContainer.innerHTML = `<p>${categories.error}</p>`;
        return;
      }

      if (categories.length === 0) {
        flashcardSetsContainer.innerHTML = `<p>No categories found.</p>`;
        return;
      }

      for (let i = 0; i < categories.length; i += 3) {
        const row = document.createElement("div");
        row.className = "main-content-row";

        for (let j = i; j < i + 3 && j < categories.length; j++) {
          const category = categories[j];
          const button = document.createElement("button");
          button.className = "btx-blue-blue";
          button.onclick = () => {
            window.location.href = `browse.php?category_id=${
              category.id
            }&category_name=${category.name}`;
          };

          button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                            <path d="M28 12V4L8 14v28l12-6" />
                            <path fill="currentColor" d="M20 16L40 6v28L20 44z" />
                        </g>
                    </svg>
          ${category.name}`;
          row.appendChild(button);
        }

        flashcardSetsContainer.appendChild(row);
      }
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
      flashcardSetsContainer.innerHTML = `<p>Error fetching categories: ${error.message}</p>`;
    });
}
document.addEventListener("DOMContentLoaded", () => {
  displayCategoryButtons(); // Load all category buttons initially
});
