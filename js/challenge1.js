document.addEventListener("DOMContentLoaded", function() {
  // When the DOM content is fully loaded
  var heading = document.querySelector('h1'); // Select the h1 element
  heading.style.textAlign = 'center'; // Apply text alignment
  heading.style.fontStyle = 'Cursive'; // Apply font style
  heading.style.color = '#6E3DFF'; // Apply color
});


document.addEventListener('dblclick',function(){
  var currenttime = new Date().toLocaleTimeString();
  alert('Current Time: ' + currenttime);
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleCheckbox = document.getElementById('toggle');
  const emailBox = document.getElementById('emailBox');

  function toggleemailField() {
    // If the checkbox is checked, show the email field; otherwise, hide it
    if (toggleCheckbox.checked) {
      emailBox.classList.remove('hidden'); // Remove the 'hidden' class
    } else {
      emailBox.classList.add('hidden'); // Add the 'hidden' class
    }
  }

  // Call the function to toggle the email field visibility when the page loads
  toggleemailField();

  // Add event listener to the checkbox input field
  toggleCheckbox.addEventListener('change', toggleemailField);
});
