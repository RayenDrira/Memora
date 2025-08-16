
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const flipCardInner = document.getElementById('flipCard');
    const frontCard = document.querySelector('.flip-card-front');
    const backCard = document.querySelector('.flip-card-back');
    const currentNumber = document.getElementById('current-number-flashcard');
    const totalNumber = document.getElementById('total-number-flashcard');
    const prevButton = document.querySelector('.scroll-holder svg:first-child');
    const nextButton = document.querySelector('.scroll-holder svg:last-child');
    const backButton = document.getElementById('back-button');
    const quizButton = document.getElementById('quiz-button');
    
    // Initialize total number of flashcards
    totalNumber.textContent = flashcards.length.toString().padStart(2, '0');

    // Function to update flashcard content
    function updateFlashcard(index) {
        const card = flashcards[index];
        frontCard.querySelector('.question').textContent = card.question;
        backCard.querySelector('.answer').textContent = card.answer;
        currentNumber.textContent = (index + 1).toString().padStart(2, '0');
        frontCard.querySelector('.flash-number').textContent = (index + 1).toString().padStart(2, '0');
        backCard.querySelector('.flash-number').textContent = (index + 1).toString().padStart(2, '0');
        
        // Reset flip state
        flipCardInner.classList.remove('flipped');
        
        // Update button states
        prevButton.style.opacity = index === 0 ? '0.5' : '1';
        prevButton.style.pointerEvents = index === 0 ? 'none' : 'auto';
        nextButton.style.opacity = index === flashcards.length - 1 ? '0.5' : '1';
        nextButton.style.pointerEvents = index === flashcards.length - 1 ? 'none' : 'auto';
    }

    // Initial flashcard load
    if (flashcards.length > 0) {
        updateFlashcard(currentIndex);
    }

    // Previous button click
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateFlashcard(currentIndex);
        }
    });

    // Next button click
    nextButton.addEventListener('click', () => {
        if (currentIndex < flashcards.length - 1) {
            currentIndex++;
            updateFlashcard(currentIndex);
        }
    });

    // Back button (navigate to previous page or sets overview)
    backButton.addEventListener('click', () => {
        window.history.back();
    });


});