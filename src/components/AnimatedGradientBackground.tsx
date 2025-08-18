import React, { useEffect, useState } from 'react';

const AnimatedGradientBackground = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `linear-gradient(${angle}deg, #c084fc 0%, #ffffff 50%, #c084fc 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    />
  );
};

export default AnimatedGradientBackground; 