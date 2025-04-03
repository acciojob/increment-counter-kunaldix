let counterValue = 0;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    alert(counterValue) // Alert shows the current (un-incremented) value
    counterValue++; // Increment the counter
    counterElement.textContent = counterValue; // Update the displayed value
});