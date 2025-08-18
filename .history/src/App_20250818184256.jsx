import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Preloader from './Preloader';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

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

    updateTime(); // initialize immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isLoaded && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <span className="copyright">© Thing by Tanishq</span>
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
                  <li><a href="mailto:example@email.com">Email</a></li>
                  <li><a href="#">X</a></li>
                </ul>
              </div>
              <div className="header-column">
                <h4>Navigate</h4>
                <ul>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
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

        {/* Footer */}
        <footer className="footer">
          <div className="footer-bar">
            {/* Replace static time with live time */}
            <div className="time">{currentTime}</div>
            <div className="scripture">DAILY SCRIPTURE: [PSALM 46:1]</div>
          </div>
          <div className="footer-text">CREATIVE DEVELOPER</div>
        </footer>
      </div>
    </>
  )
}

export default App;
