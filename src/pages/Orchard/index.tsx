import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

const index = () => {
  const ref = useRef<IParallax>(null);

  return (
    <Parallax
      pages={3}
      ref={ref}
      className="inset-0 pt-16 duration-300 md:pt-0 md:pl-14"
    >
      <ParallaxLayer offset={0} speed={2.5}>
        <div className="h-full w-full bg-gray-700">dvd</div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default index;
