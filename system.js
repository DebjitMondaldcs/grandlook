// Get the send button element and add a click event listener to it
const sendBtn = document.querySelector('#send-btn');
sendBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent the default form submission

  // Get the values of the input fields
  const name = document.querySelector('#name-input').value;
  const email = document.querySelector('#email-input').value;
  const message = document.querySelector('#message-input').value;

  // Log the values to the console
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
