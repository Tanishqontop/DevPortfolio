import React from "react"
import FlipLink from "../FlipLink"

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <FlipLink href="mailto:youremail@example.com">Email</FlipLink>
      <FlipLink href="https://github.com/yourgithub">GitHub</FlipLink>
      <FlipLink href="https://linkedin.com/in/yourlinkedin">LinkedIn</FlipLink>
    </div>
  )
}

export default Contact
