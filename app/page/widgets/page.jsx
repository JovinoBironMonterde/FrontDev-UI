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

 
      <div class="Widgets">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <h4>1</h4>
                    </div>
                    <div class="item">
                        <h4>2</h4>
                    </div>
                    <div class="item">
                        <h4>3</h4>
                    </div>
                    <div class="item">
                        <h4>4</h4>
                    </div>
                    <div class="item">
                        <h4>5</h4>
                    </div>
                    <div class="item">
                        <h4>6</h4>
                    </div>
                    <div class="item">
                        <h4>7</h4>
                    </div>
                    <div class="item">
                        <h4>8</h4>
                    </div>
                    <div class="item">
                        <h4>9</h4>
                    </div>
                    <div class="item">
                        <h4>10</h4>
                    </div>
                    <div class="item">
                        <h4>11</h4>
                    </div>
                    <div class="item">
                        <h4>12</h4>
                    </div>
                </div>
            </div>
            <owlcarousel />
    </div>
  );
};

export default Widgets;
