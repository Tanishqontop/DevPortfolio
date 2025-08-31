import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Preloader from './Preloader';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const handleLoadingComplete = () => setIsLoaded(true);

  // Live time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm} ${timeZone}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  //  Create a separate Home page inside App for simplicity
  const Home = () => (
    <main className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hello, my name is Tanishq.
            <br />
            I'm a <span className="highlight">Multidisciplinary Digital Developer</span>
            <br />
            based out of Bengaluru, India.
          </h1>
          <button className="cta-button">Get in touch</button>
        </div>
        <div className="hero-illustration">
          <DotLottieReact
            src="https://lottie.host/b2fc6390-4d1e-49db-9cca-07503f10b86b/FJzANdeyKz.lottie"
            loop
            autoplay
            style={{ width: '400px', height: '400px' }}
            onError={(error) => {
              console.error('Lottie animation failed to load:', error);
            }}
          />
        </div>
      </div>
    </main>
  );

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>

        {/* Header (always visible) */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <span className="copyright">© Portfolio of Tanishq</span>
            </div>
            <div className="header-right">
              <div className="header-column">
                <h4>Status</h4>
                <p>Currently available for any type of collaboration</p>
              </div>
              <div className="header-column">
                <h4>Say hi</h4>
                <ul>
                  <li><a href="https://www.linkedin.com/in/tanishqpratap/">LinkedIn</a></li>
                  <li><a href="https://github.com/Tanishqontop">GitHub</a></li>
                  <li><a href="mailto:tanishqontop@gmail.com">Email</a></li>
                </ul>
              </div>
              <div className="header-column">
                <h4>Navigate</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/project">Projects</Link></li>
                  <li><Link to="/resources">Resources</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Page Switcher */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer (always visible) */}
        <footer className="footer">
          <div className="footer-bar">
            <div className="time">{currentTime}</div>
            <div className="scripture">DAILY SCRIPTURE: "Do your duty without attachment." [Bhagavad Gita]</div>
          </div>
          <div className="footer-text">CREATIVE DEVELOPER</div>
        </footer>
      </div>
    </>
  );
}

export default App;
