// ImageHoverEffect.js
"use client"
import React, { useState, useEffect } from 'react';


const ImageHoverEffect = () => {

  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const updateCursorPosition = (event: any) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute h-full w-full top-0 left-0 spotlight opacity-95"
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 5%, rgb(0, 0, 0) 35vh)`,
        }}
      ></div>
      <div className="image-hover-container">
        {Array.from({ length: 6 }, (_, columnIndex) => (
          <div key={columnIndex} className={`column column-${columnIndex + 1}`}>
            <div className="box-container">
              {Array.from({ length: 50 }, (_, boxIndex) => (
                <div
                  key={boxIndex}
                  className={`box box-${boxIndex + 1} column-${columnIndex + 1} rounded-lg`}
                >
                  {/* Box Content */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHoverEffect;
