// Function to update the flashcard sets dynamically
function updateFlashcardSets(categoryId, categoryName) {
  const flashcardSetsContainer = document.getElementById("flashcard-sets");
  const categoryTitle = document.getElementById("categorie-title");

  // Update the category title with white text and blue "!"
  categoryTitle.innerHTML = `${categoryName} <span class="blue">!</span>`;

  // Clear existing flashcard sets
  flashcardSetsContainer.innerHTML = "";

  // Fetch flashcard sets from the server
  fetch(`../php/fetch_flashcards.php?category_id=${categoryId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data); // Debugging

      if (data.error) {
        flashcardSetsContainer.innerHTML = `<p>${data.error}</p>`;
        return;
      }

      // Check if no flashcard sets are found
      if (data.length === 0) {
        flashcardSetsContainer.innerHTML = `<p>No flashcard sets found.</p>`;
        return;
      }

      for (let i = 0; i < data.length; i += 3) {
        const row = document.createElement("div");
        row.className = "main-content-row";
        for (let j = i; j < i + 3 && j < data.length; j++) {
          const set = data[j];
          const button = document.createElement("button");
          button.className = "btx-blue-blue subject-button";
          button.onclick = () => {
            window.location.href = `revise.php?set_id=${set.id}`; // Redirect to the flashcard set page
          };
          button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M14.5 29C..." fill="black" />
      </svg>
      ${set.title}`;
          row.appendChild(button);
        }

        flashcardSetsContainer.appendChild(row);
      }
    })
    .catch((error) => {
      console.error("Error fetching flashcard sets:", error); // Debugging
      flashcardSetsContainer.innerHTML = `<p>Error fetching flashcard sets: ${error.message}</p>`;
    });
}

// Add event listeners to category links
document.querySelectorAll(".category-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const categoryId = link.getAttribute("data-category-id"); // Get the category ID from the data attribute
    const categoryName = link.textContent.trim(); // Get the category name from the link text
    updateFlashcardSets(categoryId, categoryName);
  });
});

// Add event listeners to category urls
function getCategoryFromURLAndUpdate() {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("category_id");
  const categoryName = params.get("category_name");

  if (categoryId && categoryName) {
    updateFlashcardSets(categoryId, categoryName);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  getCategoryFromURLAndUpdate();
});
