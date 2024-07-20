// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // This code will run when the DOM is fully loaded
    const textElement = document.getElementById("text");
    if (textElement) {
      textElement.textContent = "This is really cool!";
    } else {
      console.error("Element with id 'text' not found");
    }
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );