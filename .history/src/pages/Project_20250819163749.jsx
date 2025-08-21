import React from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const handleLoadingComplete = () => setIsLoaded(true);

export default function Project() {
  return (
    <div> 
        <h1>Project</h1>
    </div>
  )
}
