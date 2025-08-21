
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
          <h1>Projects</h1>
          <h2 className="bg-red-600">bh</h2>
        </div>
        

      </div>
    </>
  );
}
