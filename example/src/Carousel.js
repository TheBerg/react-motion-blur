import React from 'react';

import {MotionBlur} from 'react-motion-blur';


export function Carousel({images}) {
  return (
    <div className="Carousel box">
      <MotionBlur>
        <div className="Carousel-layout">
          {images.map(image => (
            <img
              key={image}
              width={315}
              height={250}
              src={image}
              alt="Carousel item"
            />
          ))}
        </div>
      </MotionBlur>
    </div>
  );
}
