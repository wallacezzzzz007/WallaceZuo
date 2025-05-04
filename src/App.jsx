import React, { useState } from "react";
import "./App.css";
import rocketDay from "./assets/rocket_day.gif";
import rocketNight from "./assets/rocket_night.gif";

// Generating Stars
const StarField = ({ count = 50 }) => {
  const stars = Array.from({ length: count }, (_, i) => {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
    };
    return <span className="star" key={i} style={style} />;
  });
  return <div className="star-field">{stars}</div>;
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const rocket = isDark ? rocketNight : rocketDay;
  const rocketClass = isDark
    ? "rocket-flying rocket-large"
    : "rocket-flying rocket-small";

  return (
    <div className={`launch-container ${isDark ? "dark" : ""}`}>
      {isDark && <StarField count={60} />}
      {isDark && (
        <>
          <div className="shooting-star" />
          <div className="shooting-star" />
        </>
      )}
      <div className="toggle-wrapper">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          <span className="slider" />
        </label>
      </div>

      <img src={rocket} alt="Rocket" className={rocketClass} />
      <h1>Launching Soon</h1>
      <p className="building-text">Building the universe...</p>
    </div>
  );
}

export default App;
