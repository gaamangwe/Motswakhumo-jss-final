// JavaScript for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".slideshow-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
document.getElementById("searchButton").addEventListener("click", function () {
  console.log("Search button clicked"); // Add this line for debugging
  var searchQuery = document.getElementById("input").value;
  var searchResults = performSearch(searchQuery);
  displaySearchResults(searchResults);
});

// Function to perform search (Replace this with your search logic)
function performSearch(query) {
  // This is a dummy example
  var dummySearchResults = [
    "Result 1 for " + query,
    "Result 2 for " + query,
    "Result 3 for " + query,
  ];
  return dummySearchResults;
}

// Function to display search results
function displaySearchResults(results) {
  var searchResultsContainer = document.getElementById("searchResults");
  // Clear previous results
  searchResultsContainer.innerHTML = "";
  // Display each result
  results.forEach(function (result) {
    var resultElement = document.createElement("p");
    resultElement.textContent = result;
    searchResultsContainer.appendChild(resultElement);
  });
}
// Function to analyze user input using Google Cloud Natural Language API
function analyzeUserInput(userInput) {
  // Send user input to the NLP service for analysis
  // Replace 'YOUR_API_KEY' with your actual API key
  fetch(
    "https://language.googleapis.com/v1/documents:analyzeEntities?key=YOUR_API_KEY",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        document: {
          content: userInput,
          type: "PLAIN_TEXT",
        },
        encodingType: "UTF8",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Parse the analysis results and extract relevant information
      const entities = data.entities.map((entity) => entity.name);
      const response = generateResponse(entities);
      displayAssistantResponse(response);
    })
    .catch((error) => {
      console.error("Error analyzing user input:", error);
      // Handle errors
      const response = "I'm sorry, I couldn't analyze your input.";
      displayAssistantResponse(response);
    });
}

// Function to generate a response based on the analyzed entities
function generateResponse(entities) {
  // Example: Generate a response based on the detected entities
  if (entities.includes("weather")) {
    // Call a weather API to get the current weather forecast
    // Replace 'YOUR_WEATHER_API_KEY' with your actual API key
    const weatherAPIURL =
      "https://api.example.com/weather?key=YOUR_WEATHER_API_KEY";
    fetch(weatherAPIURL)
      .then((response) => response.json())
      .then((data) => {
        const weather = data.weather;
        const response = `The current weather is ${weather}.`;
        displayAssistantResponse(response);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        // Handle errors
        const response =
          "I'm sorry, I couldn't retrieve the weather information.";
        displayAssistantResponse(response);
      });
  } else {
    // Default response for unrecognized entities
    return "I'm not sure how to respond to that.";
  }
}

// Function to display the assistant's response
function displayAssistantResponse(response) {
  const conversation = document.getElementById("conversation");
  const assistantMessage = document.createElement("p");
  assistantMessage.textContent = "Assistant: " + response;
  assistantMessage.classList.add("assistant-message");
  conversation.appendChild(assistantMessage);
  conversation.scrollTop = conversation.scrollHeight;
}

// Updated function to handle user input
function handleInput() {
  var userInput = document.getElementById("input").value;
  document.getElementById("input").value = "";
  const conversation = document.getElementById("conversation");
  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + userInput;
  userMessage.classList.add("user-message");
  conversation.appendChild(userMessage);
  conversation.scrollTop = conversation.scrollHeight;
  analyzeUserInput(userInput);
}
