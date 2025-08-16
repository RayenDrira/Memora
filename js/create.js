document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Steps
  const step1 = document.getElementById("create-1");
  const step2 = document.getElementById("create-2");

  // Metadata inputs (create-1)
  const titleInput = document.getElementById("title-input");
  const categoryInput = document.getElementById("categorie-input");
  const descriptionInput = document.getElementById("description-input");

  // Flashcard inputs (create-2)
  const questionInput = document.getElementById("question-input");
  const answerInput = document.getElementById("answer-input");
  const correctOptionInput = document.getElementById("correct-option");
  const wrongOption1Input = document.getElementById("wrong-option-1");
  const wrongOption2Input = document.getElementById("wrong-option-2");
  const wrongOption3Input = document.getElementById("wrong-option-3");
  const hintInput = document.getElementById("hint");

  // Buttons
  const nextButton1 = document.getElementById("next-button-1");
  const addFlashcardButton = document.getElementById("add-falshcard");
  const backButton2 = document.getElementById("back-button-2");
  const nextButton2 = document.getElementById("next-button-2");

  // Flashcard number
  const flashNumberElements = document.querySelectorAll(".flash-number");
  let flashNumber = 1; // Initial flashcard number

  // Data storage
  const metadata = {}; // Object to store metadata (title, category, description)
  const flashcards = []; // Array to store flashcard data
  let currentFlashcardIndex = 0; // Tracks the current flashcard being edited

  // Initialize step visibility
  step1.style.display = "flex"; // Show create-1 initially
  step2.style.display = "none"; // Hide create-2 initially

  // Step 1 -> Step 2
  nextButton1.addEventListener("click", (e) => {
    e.preventDefault();

    // Basic validation
    if (!titleInput.value || !categoryInput.value || !descriptionInput.value) {
      alert("Please fill out all fields.");
      return;
    }

    // Save metadata
    metadata.title = titleInput.value;
    metadata.category = categoryInput.value;
    metadata.description = descriptionInput.value;

    // Navigate to create-2
    step1.style.display = "none";
    step2.style.display = "block";
  });

  // Add or update current flashcard, then go to next
  addFlashcardButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !questionInput.value ||
      !answerInput.value ||
      !correctOptionInput.value ||
      !wrongOption1Input.value ||
      !wrongOption2Input.value ||
      !wrongOption3Input.value ||
      !hintInput.value
    ) {
      alert("Please fill out all flashcard fields.");
      return;
    }

    const currentFlashcard = {
      question: questionInput.value,
      answer: answerInput.value,
      quiz: {
        correctOption: correctOptionInput.value,
        wrongOption1: wrongOption1Input.value,
        wrongOption2: wrongOption2Input.value,
        wrongOption3: wrongOption3Input.value,
      },
      hint: hintInput.value,
    };

    // Update or add
    if (flashcards[currentFlashcardIndex]) {
      flashcards[currentFlashcardIndex] = currentFlashcard;
    } else {
      flashcards.push(currentFlashcard);
    }

    currentFlashcardIndex++;

    if (flashcards[currentFlashcardIndex]) {
      // Editing existing flashcard
      const nextCard = flashcards[currentFlashcardIndex];
      questionInput.value = nextCard.question;
      answerInput.value = nextCard.answer;
      correctOptionInput.value = nextCard.quiz.correctOption;
      wrongOption1Input.value = nextCard.quiz.wrongOption1;
      wrongOption2Input.value = nextCard.quiz.wrongOption2;
      wrongOption3Input.value = nextCard.quiz.wrongOption3;
      hintInput.value = nextCard.hint;
    } else {
      // Blank new flashcard
      questionInput.value = "";
      answerInput.value = "";
      correctOptionInput.value = "";
      wrongOption1Input.value = "";
      wrongOption2Input.value = "";
      wrongOption3Input.value = "";
      hintInput.value = "";
    }

    // Update flashcard number display
    flashNumber = currentFlashcardIndex + 1;
    flashNumberElements.forEach((el) => {
      el.textContent = flashNumber.toString().padStart(2, "0");
    });
  });

  // Go back to previous flashcard or metadata
  backButton2.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentFlashcardIndex > 0) {
      currentFlashcardIndex--;

      const previous = flashcards[currentFlashcardIndex];
      questionInput.value = previous.question;
      answerInput.value = previous.answer;
      correctOptionInput.value = previous.quiz.correctOption;
      wrongOption1Input.value = previous.quiz.wrongOption1;
      wrongOption2Input.value = previous.quiz.wrongOption2;
      wrongOption3Input.value = previous.quiz.wrongOption3;
      hintInput.value = previous.hint;

      flashNumber = currentFlashcardIndex + 1;
      flashNumberElements.forEach((el) => {
        el.textContent = flashNumber.toString().padStart(2, "0");
      });
    } else {
      // Back to metadata step
      step2.style.display = "none";
      step1.style.display = "flex";

      // Restore metadata fields
      titleInput.value = metadata.title || "";
      categoryInput.value = metadata.category || "";
      descriptionInput.value = metadata.description || "";
    }
  });

  // Go forward to the next flashcard
  nextButton2.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentFlashcardIndex < flashcards.length - 1) {
      currentFlashcardIndex++;

      const nextCard = flashcards[currentFlashcardIndex];
      questionInput.value = nextCard.question;
      answerInput.value = nextCard.answer;
      correctOptionInput.value = nextCard.quiz.correctOption;
      wrongOption1Input.value = nextCard.quiz.wrongOption1;
      wrongOption2Input.value = nextCard.quiz.wrongOption2;
      wrongOption3Input.value = nextCard.quiz.wrongOption3;
      hintInput.value = nextCard.hint;

      flashNumber = currentFlashcardIndex + 1;
      flashNumberElements.forEach((el) => {
        el.textContent = flashNumber.toString().padStart(2, "0");
      });
    } else {
      alert("You are already on the latest flashcard.");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect metadata
    const metadata = {
      title: titleInput.value,
      category: categoryInput.value,
      description: descriptionInput.value,
    };

    // Validate metadata
    if (!metadata.title || !metadata.category || !metadata.description) {
      alert("Please fill out all metadata fields.");
      return;
    }

    // Validate and add the current flashcard to the array
    if (
      questionInput.value &&
      answerInput.value &&
      correctOptionInput.value &&
      wrongOption1Input.value &&
      wrongOption2Input.value &&
      wrongOption3Input.value &&
      hintInput.value
    ) {
      const currentFlashcard = {
        question: questionInput.value,
        answer: answerInput.value,
        quiz: {
          correctOption: correctOptionInput.value,
          wrongOption1: wrongOption1Input.value,
          wrongOption2: wrongOption2Input.value,
          wrongOption3: wrongOption3Input.value,
        },
        hint: hintInput.value,
      };

      // Add or update the current flashcard in the array
      if (flashcards[currentFlashcardIndex]) {
        flashcards[currentFlashcardIndex] = currentFlashcard;
      } else {
        flashcards.push(currentFlashcard);
      }
    } else {
      alert("Please fill out all flashcard fields before finishing.");
      return;
    }

    // Add metadata and flashcards as a hidden input
    const data = {
      metadata,
      flashcards,
    };

    const dataInput = document.createElement("input");
    dataInput.type = "hidden";
    dataInput.name = "data";
    dataInput.value = JSON.stringify(data); // Convert metadata and flashcards to JSON
    form.appendChild(dataInput);

    // Submit the form
    form.submit();
  });
});
