'use client';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="loading-square"></div>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <h1 className="loading-title">ColorViz</h1>
        <p className="loading-subtitle">by Saubdiel Avalos</p>
      </div>
    </div>
  );
};

export default LoadingScreen;