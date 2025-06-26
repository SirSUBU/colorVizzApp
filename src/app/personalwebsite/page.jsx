
'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (!mounted) return null;

return (
    <div className="coming-soon-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <div className="coming-soon-content">
        <div className="animated-logo">
          <div className="logo-circle"></div>
          <div className="logo-pulse"></div>
        </div>
        
        <h1 className="coming-soon-title">
          <span className="word">Coming</span>
          <span className="word">Soon</span>
        </h1>
        
        <p className="coming-soon-subtitle">
          Something exciting is on the way...
        </p>
        
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        
        <div className="coming-soon-message">
          <p>🚀 Crafting something extraordinary</p>
          <p>✨ Only *slightly* ai-powered</p>
        </div>
        
        <button 
          onClick={handleGoBack}
          className="back-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Go Back
        </button>
      </div>
      
      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </div>
  );
}