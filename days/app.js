// Create an array of country names
let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon"];

// Select a div element in HTML
let div = document.getElementById("div");

// Clear the div content
div.innerHTML = "";

// Set the number of rows and columns
let rows = '6';
let cols = '6';

// Loop through each row
for (let i = 0; i < rows; i++) {
  // Create a paragraph element
  let p = document.createElement("p");
  
  // Loop through each column
  for (let j = 0; j < cols; j++) {
    // Get the index of the country in the array
    let index = i * cols + j;
    
    // Check if the index is valid
    if (index < countries.length) {
      // Get the country name
      let country = countries[index];
      
      // Create a span element
      let span = document.createElement("span");
      
      // Set the span content to the country name
      span.textContent = country;
      
      // Set the span style to have a border and some padding
      span.style.border = "1px solid black";
      span.style.padding = "5px";
    
      
      // Append the span to the paragraph
      p.appendChild(span);
    }
  }
 
  // Append the paragraph to the div
  div.appendChild(p);
}
