// test.js

// Import the function or code you want to test
const app = require('./app');

// Mock the alert function
global.alert = jest.fn();

// Test case to check if the alert is displayed
test('alert is displayed when the page loads', () => {
  // Call the function that triggers the alert
  app();

  // Check if the alert function was called with the correct message
  expect(global.alert).toHaveBeenCalledWith("Hello, this is a basic JavaScript app!");
});