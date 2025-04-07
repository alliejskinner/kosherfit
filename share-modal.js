// src/share-modal.js
import React, { useEffect } from 'react';

function ShareModal() {
  useEffect(() => {
    const modalElement = document.getElementById('share-modal');
    if (modalElement) {
      const handleClick = () => {
        console.log('Modal clicked!');
      };

      // Attach event listener after component is mounted
      modalElement.addEventListener('click', handleClick);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        modalElement.removeEventListener('click', handleClick);
      };
    }
  }, []);  // Empty dependency array ensures this only runs once when the component mounts

  return (
    <div id="share-modal">
      <h2>Share this Modal!</h2>
      <button>Close</button>
    </div>
  );
}

export default ShareModal;

