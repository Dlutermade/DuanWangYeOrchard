/* eslint-disable react/no-unknown-property */
import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import Page from './Page';

import img1 from '../../../assets/feedback/IMG_1643.png';
import img2 from '../../../assets/feedback/IMG_1646.png';
import img3 from '../../../assets/feedback/IMG_1647.png';
import img4 from '../../../assets/feedback/IMG_1648.png';
import img5 from '../../../assets/feedback/IMG_1649.png';

const Pages = () => {
  const { width } = useThree((state) => state.viewport);
  const ref = useRef<HTMLDivElement>(null);
  const ScrollData = useScroll();

  const origin = width * 0.1;
  const factor = width >= 7 ? (width >= 16 ? 0.25 : 0.5) : 1.3;
  const pageSize = width >= 7 ? (width >= 16 ? 2.5 : 3.7) : 7.5;

  useEffect(() => {
    if (ref.current) {
      const scroll = (e: WheelEvent) => {
        if (ref.current) {
          ScrollData.offset += e.deltaY * 0.005;
        }
      };
      ref.current.addEventListener('wheel', scroll);

      return () => {
        ref.current?.removeEventListener('wheel', scroll);
      };
    }
  }, [ref.current]);

  return (
    <ScrollControls horizontal infinite pages={pageSize}>
      {/* Scroll Controls is context.Provider */}

      <Scroll html ref={ref}></Scroll>
      <Scroll>
        <Page position={[width * factor * 0 + origin, 0, 0]} url={img1} />
        <Page position={[width * factor * 1 + origin, 0, 0]} url={img2} />
        <Page position={[width * factor * 2 + origin, 0, 0]} url={img3} />
        <Page position={[width * factor * 3 + origin, 0, 0]} url={img4} />
        <Page position={[width * factor * 4 + origin, 0, 0]} url={img5} />
      </Scroll>
    </ScrollControls>
  );
};

export default Pages;
