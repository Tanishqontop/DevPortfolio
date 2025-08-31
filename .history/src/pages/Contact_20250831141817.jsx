import React from "react"
import FlipLink from "../FlipLink"

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <FlipLink href="mailto:tanishqontop@gmail.com">Email</FlipLink>
      <FlipLink href="https://github.com/Tanishqontop">GitHub</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/tanishqpratap/">LinkedIn</FlipLink>
    </div>
  )
}

export default Contact
