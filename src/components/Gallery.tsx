// ImageHoverEffect.js

import React from 'react';

const ImageHoverEffect = () => {
  return (
    <div className="image-hover-container">
      {Array.from({ length: 6 }, (_, columnIndex) => (
        <div key={columnIndex} className={`column column-${columnIndex + 1}`}>
          <div className="box-container">
            {Array.from({ length: 6 }, (_, boxIndex) => (
              <div
                key={boxIndex}
                className={`box box-${boxIndex + 1} column-${columnIndex + 1}`}
              >
                {/* Box Content */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageHoverEffect;
