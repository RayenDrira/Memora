window.addEventListener("DOMContentLoaded", () => {
  const quizButton = document.getElementById("quiz-button");
  const backButton = document.getElementById("back-button");
  const cancelButton = document.getElementById("cancel-button");
  const quizContainer = document.getElementById("quiz-container");
  const reviseDiv = document.querySelector(".revise");
  const quizexecute = document.getElementById("quiz-execute");
  const form = document.querySelector("form");

  // Show the quiz container and hide other content
  quizButton.addEventListener("click", () => {
    quizContainer.style.display = "block";
    reviseDiv.style.display = "none";
    quizexecute.style.display = "none";
  });

  // Navigate back to the previous page
  backButton.addEventListener("click", () => {
    history.back();
  });

  // Cancel button also hides the quiz container
  cancelButton.addEventListener("click", () => {
    quizContainer.style.display = "none";
    reviseDiv.style.display = "block";
  });

  // Add listener for form submission to switch to quiz-execute
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission
    quizContainer.style.display = "none";
    reviseDiv.style.display = "none";
    quizexecute.style.display = "flex"; // Show the quiz-execute div
  });

  // Get references for quiz content elements
  const levelRadios = document.querySelectorAll('input[name="quiz-level"]');
  const hint = document.getElementById("quiz-type-hint");
  const timer = document.getElementById("quiz-type-timer");
  const mc = document.getElementById("quiz-type-mc");

  // Function to update checked states only (not disabled status)
  function updateQuizOptions(level) {
    switch (level) {
      case "easy":
        hint.checked = true;
        timer.checked = false;
        mc.checked = true;
        hint.disabled = true;
        timer.disabled = true;
        mc.disabled = true;
        break;
      case "medium":
        hint.checked = true;
        timer.checked = true;
        mc.checked = true;
        hint.disabled = true;
        timer.disabled = true;
        mc.disabled = true;
        break;
      case "hard":
        hint.checked = false;
        timer.checked = true;
        mc.checked = true;
        hint.disabled = true;
        timer.disabled = true;
        mc.disabled = true;
        break;
    }
  }

  // Event listeners for level selection
  levelRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        updateQuizOptions(radio.value);
      }
    });
  });

  // Initial state on page load
  const selected = document.querySelector('input[name="quiz-level"]:checked');
  if (selected) {
    updateQuizOptions(selected.value);
  }
});
