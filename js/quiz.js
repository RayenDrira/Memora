window.addEventListener("DOMContentLoaded", () => {
    // Get references
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
    levelRadios.forEach(radio => {
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
