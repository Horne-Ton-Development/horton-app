// Check if window is defined before using it
if (typeof window !== 'undefined') {
    window.onload = showAlert;
}

function showAlert() {
    alert('Hello, this is a basic JavaScript app!');
}

// Export the function if you want to test it
module.exports = showAlert;