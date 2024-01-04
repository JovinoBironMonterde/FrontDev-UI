"use client"
import React, { useState, useEffect } from 'react';
import Loadingspinner from '../../components/LoadingSpinner';
import '../../../public/assets/css/frondevcss.css'

const Widgets = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the spinner after a specific interval (e.g., 3000 milliseconds or 3 seconds)
    const timeoutId = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className='ProfileMainContainer'>
      {showSpinner && (
        <div className="SpinnerContainer">
          <Loadingspinner />
        </div>
      )}

      <div className="content">
        <h1>Widgets</h1>
      </div>
    </div>
  );
};

export default Widgets;
