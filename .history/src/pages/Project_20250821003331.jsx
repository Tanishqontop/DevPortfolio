
import React, { useState } from 'react';
import Preloader from '../Preloader';



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
          <h1 className='text-6xl font-bold'>Projects</h1>
        </div>
        

      </div>
    </>
  );
}
