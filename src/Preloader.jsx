import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Preloader.css';

const Preloader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual content to load
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 3000); // Show preloader for 3 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <DotLottieReact
          src="https://lottie.host/97460846-8c9d-4444-b15e-2a7c7c9daca8/TRTR2wfqCC.lottie"
          loop
          autoplay
          style={{ width: '200px', height: '200px' }}
        />
      </div>
    </div>
  );
};

export default Preloader;
