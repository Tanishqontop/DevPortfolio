import React, { useState } from "react"
import FlipLink from "../FlipLink"
import Preloader from "../Preloader"

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div
        className={`flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 w-full max-w-lg">
          <FlipLink href="mailto:tanishqontop@gmail.com">Email</FlipLink>
          <FlipLink href="https://github.com/Tanishqontop">GitHub</FlipLink>
          <FlipLink href="https://www.linkedin.com/in/tanishqpratap/">
            LinkedIn
          </FlipLink>
        </div>
      </div>
    </>
  )
}

export default Contact
