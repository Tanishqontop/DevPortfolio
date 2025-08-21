import React, { useState } from "react"
import Preloader from "../Preloader"
import { CardCarousel } from "../CardCarousel" // ✅ import carousel

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  // Example images (make sure they exist in /public/images/)
  const images = [
    { src: "./public/project1.png", alt: "Project 1" },
    { src: "./public/project2.png", alt: "Project 2" },
    { src: "./public/project3.png", alt: "Project 3" },
  ]

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        <div className="m-9 flex flex-col gap-8">
          <h1 className="m-9 text-6xl font-bold">Projects</h1>
          <CardCarousel images={images} autoplayDelay={2000} />
        </div>
      </div>
    </>
  )
}
