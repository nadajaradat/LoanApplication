import React, { useState, useEffect } from 'react';
import './style.css';

/*
this code creates a reusable Modal component that can be used to display 
a modal with different content and text colors (green for success and red for error)
 based on the isSuccess prop. The modal is automatically closed when a click event occurs 
 outside of it when it's open. It also resets the isSubmitted state when closed. */
 
function Modal({ body, isSubmitted, setIsSubmitted, isSuccess }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add a click event listener to the document
  useEffect(() => {
    function handleDocumentClick(event) {
      const modalContainer = document.querySelector('.modal.open');

      // Check if the click target is outside the modal container
      if (modalContainer && !modalContainer.contains(event.target)) {
        closeModal();
      }
    }

    // Attach the event listener when the modal is open
    if (isSubmitted) {
      setIsModalOpen(true);
      document.addEventListener('click', handleDocumentClick);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isSubmitted]);

  function closeModal() {
    setIsModalOpen(false);
    setIsSubmitted(false);
  }

  if (!isModalOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <div className={`modal ${isModalOpen ? 'open' : ''}`}>
      <p style={{ color: isSuccess ? 'green' : 'red' }}>{body}</p>
    </div>
  );
}

export default Modal;
