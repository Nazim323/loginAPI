// Get a reference to the heading element
var heading = document.getElementById("myHeading");

// Get a reference to the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Change the text of the heading
  
  heading.textContent = "DOM Manipulation Example";
  
  // Change the background color of the heading
  heading.style.backgroundColor = "yellow";
  
  // Add a CSS class to the heading
  heading.classList.add("highlight");
});
