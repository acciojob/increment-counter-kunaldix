let counterValue = 0;

    // Get references to the counter paragraph and the button
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Add a click event listener to the button
    incrementBtn.addEventListener('click', () => {
      // Display the un-incremented value in an alert
      alert(`${counterValue}`);

      // Increment the counter value
      counterValue++;

      // Update the counter paragraph with the new value
      counterElement.textContent = counterValue;
    });