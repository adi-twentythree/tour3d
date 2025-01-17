import React, { useState, useEffect } from 'react';

const Loading= () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading completion
    }, 3000); // Set to desired loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="loading-screen">
      {isLoading ? (
        <>
          <p className="loading-text">Loading...</p>
          <p className="loading-text">Experience is loading</p>
        </>
      ) : (
        <p className="loading-text">Experience Loaded!</p> // You can change this to the content of your app
      )}
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 24px;
          animation: fadeIn 2s ease-out;
        }

        .loading-text {
          animation: slideIn 1.5s ease-out infinite alternate;
        }

        /* Fade-in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-in animation */
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
