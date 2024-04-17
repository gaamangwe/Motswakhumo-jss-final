// assistant.js

// Function to handle the user input
function handleInput() {
  // Get the user input
  var userInput = document.getElementById("input").value;

  // Clear the input field
  document.getElementById("input").value = "";

  // Display the user input in the conversation
  var conversation = document.getElementById("conversation");
  var userMessage = document.createElement("p");
  userMessage.textContent = "You: " + userInput;
  conversation.appendChild(userMessage);

  // Respond to the user input
  respondToUserInput(userInput);
}

// Function to generate a response to the user input
function respondToUserInput(userInput) {
  // Dummy responses for demonstration
  var response;
  if (userInput.toLowerCase().includes("hello")) {
    response = "Hello there! How can I help you?";
  } else if (userInput.toLowerCase().includes("school")) {
    response = "Yes, this is Motswakhumo Community Junior Secondary School.";
  } else if (userInput.toLowerCase().includes("contact")) {
    response = "You can contact us through the Contact Us page.";
  } else {
    response = "I'm sorry, I didn't understand that.";
  }

  // Display the response in the conversation
  var conversation = document.getElementById("conversation");
  var assistantMessage = document.createElement("p");
  assistantMessage.textContent = "Assistant: " + response;
  conversation.appendChild(assistantMessage);
}

// Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", handleInput);

// Add event listener to handle pressing Enter in the input field
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleInput();
  }
});
