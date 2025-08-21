
import React, { useState } from 'react';
import Preloader from '../Preloader';
import project1Img from "../assets/Project1.png"; // 👈 import the image




export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };


  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <div className="flex">
           <h1 className="text-6xl font-bold">Projects</h1>
        </div>
      
      {/* Image Section */}
        <div className="flex">
          <img
            src={project1Img}
            alt="Project 1"
            className="w-96 ml-4 rounded-xl shadow-lg"
          />
        
      </div>
      </div>
    </>
  );
}
