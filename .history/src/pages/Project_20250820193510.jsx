import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Routes, Route, Link } from 'react-router-dom';
import Preloader from '../Preloader';
import './Project.css';


export default function Projects() {
  return (
    <>
     {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
     <div className="projects-header"> 
        <h1>Project</h1>
    </div>
   </>
  )
}
