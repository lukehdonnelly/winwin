function displaySuccessMessage(message) {
  const successAlert = document.createElement('div');
  successAlert.classList.add('success-alert');
  successAlert.textContent = message;

  document.body.appendChild(successAlert);
  setTimeout(() => {
    successAlert.remove();
    // Redirect the user after the success message is displayed for 3 seconds
    window.location.href = 'browse.html';
  }, 3000);
}

function displayErrorMessage(message) {
  const successAlert = document.createElement('div');
  successAlert.classList.add('error-alert');
  successAlert.textContent = message;

  document.body.appendChild(successAlert);
  setTimeout(() => {
    successAlert.remove();
    // Redirect the user after the success message is displayed for 3 seconds
  }, 3000);
}

document.getElementById('sell-item-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  console.log('Form submitted'); // Debugging

  const formData = Object.fromEntries(new FormData(event.target).entries());

  console.log('Form data:', formData); // Debugging

  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response:', response); // Debugging

    if (response.ok) {
      const newItem = await response.json();
      console.log('New item:', newItem); // Debugging
      displaySuccessMessage('Item added successfully!');
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText); // Debugging
      throw new Error(errorText);
    }
  } catch (error) {
    console.error('Error:', error); // Debugging
    displayErrorMessage(error.message);
  }
});
