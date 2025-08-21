import React, { useState } from "react"
import Preloader from "../Preloader"
import { CardCarousel } from "../CardCarousel"

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  const images = [
    { src: "/project1.png", alt: "Project 1" },
    { src: "/project2.png", alt: "Project 2" },
    { src: "/project3.png", alt: "Project 3" },
  ]

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        
        {/* Title */}
        <div className="flex flex-col gap-8 items-start px-9">
          <h1 style={{ marginLeft: "40px" }} className="text-7xl font-bold">Projects</h1>
        </div>

        {/* Carousel */}
        <div style={{ marginLeft: "40px" }} className="flex flex-col gap-8 px-9">
          <div className="ml-20"> 
            <CardCarousel images={images} autoplayDelay={2000} />
          </div>
        </div>

      </div>
    </>
  )
}
