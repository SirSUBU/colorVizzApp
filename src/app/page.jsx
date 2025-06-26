'use client';
import Input from "@/app/components/input";
import Square from "@/app/components/square";
import LoadingScreen from "@/app/components/loading";
import { useState, useEffect } from "react";

export default function MainApp() {
  const [colorinput, setColorinput] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="app-header">
          <h1 className="app-title">ColorViz</h1>
          <p className="app-subtitle">Explore, visualize, and discover colors. Instantly.</p>
        </header>
        
        <main className="main-content">
          <Square colorinput={colorinput}/>
          <Input colorinput={colorinput} setColorinput={setColorinput}/>
        </main>
        
        <footer className="app-footer">
          <p className="footer-hint">Enter any color name, hex code, or RGB value</p>
          <div className="footer-content">
            <div className="footer-text">
              <span className="made-with">Made with grit by Saubdiel</span>
              <img 
                src="/Flag_of_Mexico.svg.png" 
                alt="Flag of Mexico" 
                className="mexican-flag-img"
                style={{ height: "24px", marginLeft: "8px", verticalAlign: "middle" }}
              />
            </div>
            <div className="footer-links">
              <a 
                href="/personalwebsite" 
                className="footer-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Website
              </a>
              <a 
                href="https://www.linkedin.com/in/saubdiel-avalos-549656281" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}