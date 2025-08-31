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
        className={`flex flex-col items-center justify-center min-h-screen gap-8 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <FlipLink href="mailto:tanishqontop@gmail.com">Email</FlipLink>
        <FlipLink href="https://github.com/Tanishqontop">GitHub</FlipLink>
        <FlipLink href="https://www.linkedin.com/in/tanishqpratap/">
          LinkedIn
        </FlipLink>
      </div>
    </>
  )
}

export default Contact
