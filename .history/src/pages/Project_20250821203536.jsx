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
      description: "A platform for content creators to showcase their work and connect with their audience.",
      url: "https://creatorhub.example.com",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      src: "/project2.png",
      alt: "EcoMarket",
      title: "EcoMarket",
      description: "An e-commerce platform focused on sustainable and eco-friendly products.",
      url: "https://ecomarket.example.com",
      tags: ["Next.js", "Stripe", "Firebase"],
    },
    {
      src: "/project3.png",
      alt: "HealthTrack",
      title: "HealthTrack",
      description: "A health and fitness tracking application with personalized recommendations.",
      url: "https://healthtrack.example.com",
      tags: ["React Native", "GraphQL", "PostgreSQL"],
    },
    {
      src: "/project4.png",
      alt: "Finance Dashboard",
      title: "Finance Dashboard",
      description: "Interactive dashboard for personal finance management and investment tracking.",
      url: "https://finance.example.com",
      tags: ["TypeScript", "D3.js", "Express"],
    },
  ];

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        {/* Header Section */}
        <div className="px-6 py-8 md:px-12 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Here are some of my recent projects. Each one represents a unique challenge
            and an opportunity to create something meaningful.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="px-6 pb-16 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <MinimalCard 
                key={index} 
                className="h-full flex flex-col transition-all duration-300 hover:shadow-lg"
                url={project.url}
              >
                <MinimalCardImage src={project.src} alt={project.alt} />
                <MinimalCardContent className="flex-grow">
                  <MinimalCardTitle className="text-xl mb-2">
                    {project.title}
                  </MinimalCardTitle>
                  <MinimalCardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </MinimalCardDescription>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </MinimalCardContent>
                <MinimalCardFooter className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    View Project →
                  </button>
                </MinimalCardFooter>
              </MinimalCard>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="px-6 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg mx-6 mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
}