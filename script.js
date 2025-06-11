// Select the container where the grid will be displayed
const container = document.querySelector('.container');

// Create a default 16x16 grid (256 squares)
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('smallDiv');

    // Change color to blue when hovered
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'blue';
    });

    container.appendChild(newDiv);
}

// Select the "Clear" button and add functionality to clear all colors
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    const smallDivs = document.querySelectorAll('.smallDiv');
    smallDivs.forEach(div => {
        div.style.backgroundColor = 'lightblue'; // Reset to initial color
    });
});

// Select the "Reset" button and add functionality to reset the grid
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    // Reset all div colors
    const smallDivs = document.querySelectorAll('.smallDiv');
    smallDivs.forEach(div => {
        div.style.backgroundColor = 'lightblue';
    });

    // Remove all divs and recreate the default grid
    container.innerHTML = '';
    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('smallDiv');
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'blue';
        });
        container.appendChild(newDiv);
    }
});

// Select the "Resize" button and add functionality to resize the grid
const resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
    const newSize = prompt("Enter the number of squares per side (e.g., 16 for a 16x16 grid):");
    if (newSize && !isNaN(newSize) && newSize > 0) {
        const totalDivs = newSize * newSize;
        container.innerHTML = ''; // Clear existing divs

        // Create new grid based on user input
        for (let i = 0; i < totalDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('smallDiv');
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = 'blue';
            });
            container.appendChild(newDiv);
        }
    } else {
        alert("Please enter a valid number.");
    }
});
