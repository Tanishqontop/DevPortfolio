import React, { useState } from "react";
import Preloader from "../Preloader";
import { CardCarousel } from "../CardCarousel";
import {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
} from "../minimal-card"; // adjust path if needed

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  const projects = [
    {
      src: "/project1.png",
      alt: "CreatorHub",
      title: "CreatorHub",
      description: "This is the description for project one.",
    },
    {
      src: "/project2.png",
      alt: "Project 2",
      title: "Project Two",
      description: "This is the description for project two.",
    },
    {
      src: "/project3.png",
      alt: "Project 3",
      title: "Project Three",
      description: "This is the description for project three.",
    },
  ];

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        {/* Title */}
        <div className="flex flex-col gap-8 items-start px-9">
          <h1 style={{ marginLeft: "20px" }} className="text-7xl font-bold">
            Projects
          </h1>
        </div>

        {/* Minimal Cards */}
        <div style={{ marginLeft: "30px", marginTop: "30px" }} className="flex flex-wrap gap-6 mt-12 px-9">
          {projects.map((project, index) => (
            <MinimalCard key={index} className="w-[300px]">
              <MinimalCardImage src={project.src} alt={project.alt} />
              <MinimalCardContent>
                <MinimalCardTitle>{project.title}</MinimalCardTitle>
                <MinimalCardDescription>
                  {project.description}
                </MinimalCardDescription>
              </MinimalCardContent>
              <MinimalCardFooter>
                {/* Optional footer content */}
              </MinimalCardFooter>
            </MinimalCard>
          ))}
        </div>
      </div>
    </>
  );
}
