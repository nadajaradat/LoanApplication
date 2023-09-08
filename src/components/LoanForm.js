import React, { useState } from 'react';
import Modal from './Modal';
import './style.css';

function LoanForm() {
    //form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    isEmployee: false,
    salaryRange: 'less Than 500$',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  //to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const openModal = () => {
    setIsModalOpen(true); // Open the modal when this function is called
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setError('The Form Has Been Submitted Successfully');
    console.log(formData);
    setIsSubmitted(true);

   

    const phoneNumber = formData.phone.trim();
    if (phoneNumber === '' || !/^\d{8,10}$/.test(phoneNumber)) {
      setError('Phone number must be 8 - 10 digits');
      return;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18 || age > 65) {
      setError('Age must be between 18 and 65');
      return;
    }

   
  };

  // Function to check if all required fields are filled
  const isFormValid = () => {
    const { name, phone, age, salaryRange } = formData;
    return name.trim() !== '' && phone.trim() !== '' && age.trim() !== '' && salaryRange.trim() !== '';
  };

  return (
    <div className="container">
      <div className='form-container'>
        <form>
          <h1>Requesting a Loan</h1>
          
          <div className="input-container">
            <label htmlFor="name">Name:</label><br/>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="isEmployee">Are you an employee:</label>
            <input
              type="checkbox"
              id="isEmployee"
              name="isEmployee"
              checked={formData.isEmployee}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="salary">Salary:</label>
            <select
              id="salary"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleInputChange}
            >
              <option value="less Than 500$">Less than 500$</option>
              <option value="Between 500$ - 1000$">Between 500$ - 1000$</option>
              <option value="Above 2000">Above 2000</option>
              {/* Add more salary range options as needed */}
            </select>
          </div>

          <button
            className="btn"
            onClick={handleSubmit}
            disabled={!isFormValid()} // Disable the button if the form is not valid
          >
            Apply for a Loan
          </button>
        </form>
      </div>

      <Modal
        body={error}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        isSuccess={error === "The Form Has Been Submitted Successfully"} // Check if the error message is a success message
/>


    </div>
  );
}

export default LoanForm;
