# Loan Application Form with Validation

This project is a simple loan application form built using React. The form collects user inputs, including name, phone number, age, employment status, and salary range. It includes basic validation to ensure that user inputs fall within acceptable limits. Additionally, a modal is displayed to show the submission status of the form.

## Instructions

### Technologies Used
- React

### Features

1. **User Input Handling:** The project uses React's `useState` to manage user inputs efficiently.

2. **Basic Validation:** User inputs are validated to ensure they meet the following criteria:
   - Phone number must be between 8 and 10 digits.
   - Age must be between 18 and 65.

3. **Modal for Submission Status:** After the user submits the loan application form, a modal is displayed to show the submission status:
   - Success Message: If the form is submitted successfully.
   - Error Message: If there are validation errors.

### Project Structure

The project is organized as follows:

- `LoanForm.js`: Contains the React component for the loan application form.
- `Modal.js`: Contains the React component for the modal that displays submission status.
- `style.css`: CSS styles for the form and modal.
- `App.js`: The main application component that renders the loan application form.

