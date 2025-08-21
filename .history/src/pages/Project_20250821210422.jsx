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
      url: "https://github.com/Tanishqontop/creatorhub",
      tags: ["React", "Node.js", "Supabase", "RazorPay"],
    },
    {
      src: "/project2.png",
      alt: "Martially",
      title: "Martially",
      description: "A Platform for connecting Martial Arts enthusiasts with trainers and classes.",
      url: "https://ecomarket.example.com",
      tags: ["React", "RazorPay", "Supabase"],
    },
    {
      src: "/project3.png",
      alt: "RizzexAI",
      title: "RizzexAI",
      description: "RizzexAI is Your AI-powered Flirty Wingman. Made with Flutter and Supabase.",
      url: "https://healthtrack.example.com",
      tags: ["Flutter", "Supabase", "PostgreSQL"],
    },
    {
      src: "/project4.png",
      alt: "Habitat",
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
          <h1 style = {{ marginTop: 90 }} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            Projects
          </h1>
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
      </div>
    </>
  );
}