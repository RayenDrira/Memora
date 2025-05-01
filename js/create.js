document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Steps
  const step1 = document.getElementById("create-1");
  const step2 = document.getElementById("create-2");
  const quiz1 = document.getElementById("quiz-1");
  const quiz2 = document.getElementById("quiz-2");

  // Button holders
  const buttonHolder2 = document.getElementById("button-holder-2");
  const buttonHolder3 = document.getElementById("button-holder-3");
  const buttonHolderFinish = document.getElementById("button-holder-finish");

  // Next Buttons
  const nextButton1 = document.getElementById("next-button-1");
  const nextButton2 = document.getElementById("next-button-2");
  const nextButton3 = document.getElementById("next-button-3");
  const nextButton4 = document.getElementById("next-button-4");
  const nextButton5 = document.getElementById("next-button-5");
  const finishButton = document.getElementById("finish-button");
  // Back Buttons
  const backButton1 = document.getElementById("back-button-1");
  const backButton2 = document.getElementById("back-button-2");
  const backButton3 = document.getElementById("back-button-3");
  const backButton4 = document.getElementById("back-button-4");

  // Flashcard number
  const flashNumberElements = document.querySelectorAll(".flash-number");
  let flashNumber = 1; // Initial flashcard number

  // Initialize step visibility
  step1.style.display = "flex";
  step2.style.display = "none";
  quiz1.style.display = "none";
  quiz2.style.display = "none";
  buttonHolderFinish.style.display = "none";

  // Step 1 -> Step 2
  nextButton1.addEventListener("click", (e) => {
    e.preventDefault();
    step1.style.display = "none";
    step2.style.display = "block";
    buttonHolder2.style.display = "flex";
  });
  // Step 2 -> Step 1
  backButton2.addEventListener("click", (e) => {
    e.preventDefault();
    step1.style.display = "flex";
    step2.style.display = "none";
    buttonHolder2.style.display = "none";
  });

  // Step 2 -> Quiz 1
  nextButton2.addEventListener("click", (e) => {
    e.preventDefault();
    quiz1.style.display = "flex";
    buttonHolder2.style.display = "none";
    buttonHolder3.style.display = "flex";
  });
  // Quiz 1 -> Step 2
  backButton3.addEventListener("click", (e) => {
    e.preventDefault();
    quiz1.style.display = "none";
    buttonHolder2.style.display = "flex";
    buttonHolder3.style.display = "none";
  });

  /////quiz 1 -> Quiz 2
  nextButton3.addEventListener("click", (e) => {
    e.preventDefault();
    quiz1.style.display = "none";
    quiz2.style.display = "flex";
    buttonHolder3.style.display = "none";
  });
  // Quiz 2 -> Quiz 1
  backButton4.addEventListener("click", (e) => {
    e.preventDefault();
    quiz1.style.display = "flex";
    quiz2.style.display = "none";
    buttonHolder3.style.display = "flex";
  });

  // Quiz 2 -> Finish
  nextButton4.addEventListener("click", (e) => {
    e.preventDefault();
    quiz2.style.display = "none";
    buttonHolderFinish.style.display = "flex";
  });

  // Add one more flashcard
  nextButton5.addEventListener("click", (e) => {
    e.preventDefault();
    flashNumber++; // Increment flashcard number
    flashNumberElements.forEach((element) => {
      element.textContent = flashNumber.toString().padStart(2, "0"); // Update flash-number
    });
    step2.style.display = "block";
    quiz1.style.display = "none";
    quiz2.style.display = "none";
    buttonHolder2.style.display = "flex";
    buttonHolderFinish.style.display = "none";
  });

  // Finish button functionality
  finishButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Flashcard creation complete! Your flashcards have been saved.");
    location.reload(); // Reload to restart the process cleanly
  });
});
