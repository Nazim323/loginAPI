// Get a reference to the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Create a new image element
var image = document.createElement("img");

  // Set the source and alt attributes of the image
image.src = "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png";
image.alt = "My Image";

  // Append the image to the div
var div = document.getElementById("myDiv");
div.appendChild(image);
});
