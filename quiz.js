function checkAnswer() {
    // Step 1: Set the correct answer
    const correctAnswer = "4";

    // Step 2: Get the selected radio input (user's answer)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Get the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Step 4: Check if the user selected an answer
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare the user answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "#28a745"; // green color for success
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "#dc3545"; // red color for error
        }
    } else {
        // Optional: If no option is selected
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#ffc107"; // yellow warning
    }
}

// Step 6: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
