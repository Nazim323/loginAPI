// Get a reference to the heading element
var heading = document.getElementById("myHeading");

// Change the text of the heading
heading.textContent = "Hello, OpenAI!";

// Get a reference to the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
  
  // Change the text of the heading again when the button is clicked
  heading.textContent = "Button clicked!";
});
