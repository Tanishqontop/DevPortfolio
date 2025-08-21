import React, { useState } from 'react';
import Preloader from '../Preloader';
import './Project.css';

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };


  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <div className="projects-header">
          <h1 className='bg-red-600'>Projects</h1>
        </div>
        
      </div>
    </>
  );
}
