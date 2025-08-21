import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Routes, Route, Link } from 'react-router-dom';
import Project from './pages/Project';
import Preloader from './Preloader';
import './App.css';


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
