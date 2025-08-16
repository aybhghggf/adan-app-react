import React from 'react';

const GlobalLoadingOverlay = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        fontFamily: "'Manrope', sans-serif",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
          @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
          
          :root {
            --primary-green: #38e07b;
            --soft-green: #eaf7f0;
            --text-primary: #1a202c;
            --text-secondary: #4a5568;
          }
          
          .loading-container {
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 1.5rem;
            padding: 3rem;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            text-align: center;
            animation: fadeInScale 0.5s ease-out;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .spinner {
            width: 4rem;
            height: 4rem;
            border: 4px solid rgba(56, 224, 123, 0.2);
            border-top: 4px solid var(--primary-green);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1.5rem auto;
          }
          
          .loading-dots {
            display: inline-flex;
            gap: 0.25rem;
            margin-left: 0.5rem;
          }
          
          .dot {
            width: 0.5rem;
            height: 0.5rem;
            background-color: var(--primary-green);
            border-radius: 50%;
            animation: bounce 1.4s ease-in-out infinite both;
          }
          
          .dot:nth-child(1) { animation-delay: -0.32s; }
          .dot:nth-child(2) { animation-delay: -0.16s; }
          .dot:nth-child(3) { animation-delay: 0s; }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
          
          .pulse-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 6rem;
            height: 6rem;
            border: 2px solid var(--primary-green);
            border-radius: 50%;
            opacity: 0.6;
            animation: pulseRing 2s ease-out infinite;
          }
          
          @keyframes pulseRing {
            0% {
              transform: translate(-50%, -50%) scale(0.8);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0;
            }
          }
        `
      }} />
      
      <div className="loading-container">
        <div className="relative">
          <div className="pulse-ring"></div>
          <div className="spinner"></div>
        </div>
        
        <h2 
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Loading Prayer Times
        </h2>
        
        <p 
          className="text-lg flex items-center justify-center"
          style={{ color: 'var(--text-secondary)' }}
        >
          Please wait
          <span className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        </p>
        
        <div className="mt-4">
          <p 
            className="text-sm opacity-75"
            style={{ color: 'var(--text-secondary)' }}
          >
            Fetching current prayer times for your location
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoadingOverlay;