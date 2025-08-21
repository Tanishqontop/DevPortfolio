import React, { useState } from 'react';
import { CardCarousel } from "@/components/ui/card-carousel";
import Preloader from '../Preloader';
import './Project.css';

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  const projectImages = [
    { src: "/assets/project1.png", alt: "Project 1" },
    { src: "/assets/project2.png", alt: "Project 2" },
    { src: "/assets/project3.png", alt: "Project 3" }
  ];

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        {isLoaded && (
          <div className="projects-carousel-wrapper">
            <CardCarousel
              images={projectImages}
              autoplayDelay={3000}
              showPagination={true}
              showNavigation={true}
            />
          </div>
        )}
      </div>
    </>
  );
}
