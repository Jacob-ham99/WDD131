// Create a new <img> element
const img = document.createElement("img");

// Set the source and alt text
img.src = ""; // Make sure this path matches your file location
img.alt = "Starship logo";

// Optionally, set a class or styles
img.classList.add("logo");

// Append the image to a container
document.getElementById("image-container").appendChild(img);
