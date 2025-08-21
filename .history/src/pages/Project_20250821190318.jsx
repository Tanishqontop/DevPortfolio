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
         <div className="flex flex-col gap-8 items-start px-9">
  <h1 className="text-8xl font-bold">Projects</h1>
</div>


          {/* Pass margin inside carousel wrapper */}
          <div className="ml-19">
            <CardCarousel images={images} autoplayDelay={2000} />
          </div>
        </div>
      </div>
    </>
  )
}
