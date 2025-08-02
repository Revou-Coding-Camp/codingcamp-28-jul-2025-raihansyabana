// This script contains functions to validate a form input and display a welcome message
welcomeMessage();

// Function to validate the form input
// This function checks if the name input field is empty and alerts the user if it is
// If the input is valid, it updates the result-form element with a greeting message
function validateForm() {
    // Get the name input element by its ID
    const nameInput = document.getElementById('name-input');

    // Check if the name input field is empty
    if (nameInput.value === '') {
        // Alert the user that the form cannot be empty
        alert('Form cannot be empty!');
    } else {
        // If the input is valid, get the result-form element by its ID
        const result = document.getElementById('result-form');
        // Update the text content of the result-form element with a greeting message
        // The message includes the value entered in the name input field
        result.textContent = `Hello, ${nameInput.value}! Your message has been sent.`;
    }
}

// Function to display a welcome message
// This function prompts the user for their name and updates the welcome speech element
function welcomeMessage() {
    // Prompt the user for their name and display it in the welcome speech element
    const popup = prompt('Please enter your name:');

    // If the user provides a name, update the welcome speech element
    if (popup) {
        // Get the welcome speech element and set its text content to the user's name
        const welcomeElement = document.getElementById('welcome-speech');

        // Update the text content of the welcome speech element with the user's name
        welcomeElement.textContent = popup;
    }
}